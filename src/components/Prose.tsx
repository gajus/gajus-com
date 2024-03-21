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
        '& > h3': {
          fontSize: 'x4',
        },
        '& > h4': {
          fontSize: 'x3',
        },
        '& [data-rehype-pretty-code-fragment]': {
          '& > pre': {
            '& code': {
              fontFamily: 'monospace',
            },
            border: '1px solid #ccc',
            borderRadius: '8px',
            fontSize: '18px',
            lineHeight: '24px',
            marginY: '32px',
            overflowX: 'scroll',
            paddingY: '16px',
          },
          '& [data-highlighted-chars]': {
            background: 'rgb(116, 207, 136, 0.2)',
          },
          '& [data-highlighted-line]': {
            background: 'rgb(116, 207, 136, 0.2)',
            borderLeft: '4px solid #74cf74',
          },
          '& [data-line]': {
            paddingX: '16px',
          },
          '& [data-rehype-pretty-code-caption]': {
            color: '#333',
            fontFamily: 'monospace',
            fontSize: '18px',
            padding: '8px',
          },
          '& [data-rehype-pretty-code-title]': {
            color: '#333',
            fontFamily: 'monospace',
            fontSize: '18px',
            fontWeight: '500',
            padding: '8px',
          },
        },
        '& em': {
          fontStyle: 'italic',
        },
        '& kbd': {
          background: 'code-background-100',
          borderRadius: '8px',
          color: 'white',
          display: 'inline-block',
          fontWeight: '500',
          padding: '4px',
        },
        '& p': {
          overflowWrap: 'break-word',
        },
        '& p, & li, & h2, & h3, & h4': {
          '& > code': {
            background: '#eee',
            borderRadius: '4px',
            color: '#333',
            display: 'inline-block',
            fontFamily: 'monospace',
            fontSize: '0.9em',
            marginInline: '4px',
            paddingInline: '8px',
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
            my: '8px',
          },
          display: 'block',
          marginY: '16px',
          paddingLeft: '32px',
        },
        '& ul, & ol, & p, & li': {
          '& a': {
            '& > code': {
              color: '#333',
              fontFamily: 'monospace',
            },
            '&:hover': {
              boxShadow: '0 2px 0 #0200FF',
              transition: 'box-shadow 200ms ease 0s',
            },
            boxShadow: '0 2px 0 rgb(2, 0, 255, 0.2)',
            color: 'action-100',
            paddingInline: '4px',
          },
        },
        lineHeight: '2',
      })}
    >
      {children}
    </div>
  );
};
