import { css } from '@/styles';
import { type PropsWithChildren } from 'react';

export const Prose = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={css({
        '& > * + *': {
          marginTop: '16px',
        },
        '& > *:first-child': {
          marginTop: '0px',
        },
        '& > blockquote': {
          borderLeftColor: 'border-100',
          borderLeftStyle: 'solid',
          borderLeftWidth: '4px',
          marginY: '16px',
          paddingX: '16px',
          paddingY: '8px',
        },
        '& > h1': {
          fontSize: 'x6',
        },
        '& > h1, & > h2, & > h3, & > h4': {
          fontWeight: '700',
          lineHeight: '1.5em',
          marginBottom: '0.5em',
          marginTop: '1em',
        },
        '& > h2': {
          fontSize: 'x5',
        },
        '& > h2:not(:first-child)': {
          marginBottom: '32px',
          marginTop: '32px',
        },
        '& > h3': {
          fontSize: 'x4',
        },
        '& > h4': {
          fontSize: 'x3',
        },
        '& [data-rehype-pretty-code-fragment]': {
          background: '#F8FAFE',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '18px',
          lineHeight: '24px',
          padding: '16px',
        },
        '& kbd': {
          background: 'code-background-100',
          borderRadius: '8px',
          color: 'white',
          display: 'inline-block',
          fontWeight: '500',
          padding: '8px',
        },
        '& p': {
          overflowWrap: 'break-word',
        },
        '& p, & li, & h2, & h3, & h4': {
          '& > code': {
            background: '#F8FAFE',
            borderRadius: '8px',
            fontFamily: 'monospace',
            padding: '8px',
          },
        },
        '& table': {
          '& th, & td': {
            border: '1px solid #3E3E43',
            md: {
              paddingX: '16px',
              paddingY: '8px',
            },
            smDown: {
              padding: '8px',
            },
            textAlign: 'left',
          },
          borderCollapse: 'collapse',
          marginX: '16px',
        },
        '& ul, & ol': {
          '& > li': {
            '&::marker': {
              color: '#444',
            },
            listStyle: 'disc',
            padding: '8px',
          },
          display: 'block',
          marginY: '16px',
          paddingLeft: '32px',
        },
        '& ul, & p': {
          '& a': {
            '&:hover': {
              boxShadow: '0 2px 0 #2E8EFB',
              transition: 'box-shadow 200ms ease 0s',
            },
            color: 'action-100',
          },
        },
      })}
    >
      {children}
    </div>
  );
};
