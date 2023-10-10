import config from '@/config';
import {
  createPool,
  createSqlTag,
  type DatabasePool,
  type Interceptor,
  type QueryResultRow,
  SchemaValidationError,
} from 'slonik';
import { createQueryLoggingInterceptor } from 'slonik-interceptor-query-logging';
import { z } from 'zod';

const createResultParserInterceptor = (): Interceptor => {
  return {
    transformRow: (executionContext, actualQuery, row) => {
      const { log, resultParser } = executionContext;

      if (!resultParser) {
        return row;
      }

      const validationResult = resultParser.safeParse(row);

      if (!validationResult.success) {
        log.error(
          {
            issues: validationResult.error.issues as {},
            row: row as {},
          },
          'schema validation failed',
        );

        throw new SchemaValidationError(
          actualQuery,
          row,
          validationResult.error.issues,
        );
      }

      return validationResult.data as QueryResultRow;
    },
  };
};

export const sql = createSqlTag({
  typeAliases: {
    id: z.object({
      id: z.number(),
    }),
    void: z.object({}),
  },
});

const createPostgresPool = () => {
  let poolPromise: Promise<DatabasePool>;

  return async () => {
    if (!poolPromise) {
      poolPromise = createPool(config.POSTGRES_DSN, {
        connectionTimeout: 5_000,
        idleInTransactionSessionTimeout: 5_000,
        idleTimeout: 60_000,
        interceptors: [
          createResultParserInterceptor(),
          createQueryLoggingInterceptor(),
        ],
        maximumPoolSize: 50,
      });
    }

    return poolPromise;
  };
};

export const connectToPostgres = createPostgresPool();
