const { POSTGRES_DSN } =
  // eslint-disable-next-line n/no-process-env
  process.env as Record<string, string>;

const config = {
  get POSTGRES_DSN() {
    if (!POSTGRES_DSN) {
      throw new Error('Expected POSTGRES_DSN to be defined');
    }

    return POSTGRES_DSN;
  },
};

export default config;
