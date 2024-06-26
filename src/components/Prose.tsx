import { css } from '#app/styles';
import { type PropsWithChildren } from 'react';

export const Prose = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={css({
        '& .footnotes': {
          color: '#666',
          fontSize: '0.8em',
          marginBlockStart: '32px',
        },
        '& .note-block': {
          _before: {
            color: '#666',
            content: '"Note"',
            display: 'inline-block',
            fontWeight: '600',
            marginRight: '8px',
          },
          borderLeft: '4px solid #999',
          padding: '8px 16px',
        },
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
            marginY: '24px',
            overflowX: 'scroll',
            paddingY: '16px',
            whiteSpace: 'pre-wrap',
          },
          '& [data-highlighted-chars]': {
            background: 'rgb(116, 207, 136, 0.2)',
          },
          '& [data-highlighted-line]': {
            background: 'rgb(116, 207, 136, 0.2)',
            borderLeft: '4px solid #74cf74',
          },
          '& [data-line]': {
            minHeight: '24px',
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
        '& h2, & h3, & h4': {
          '& a > code': {
            background: '#eee',
            borderRadius: '4px',
            color: '#d73a4a',
            display: 'inline-block',
            fontFamily: 'monospace',
            fontSize: '0.9em',
            marginInline: '4px',
            paddingInline: '8px',
          },
        },
        '& kbd': {
          background: 'code-background-100',
          borderRadius: '8px',
          color: 'white',
          display: 'inline-block',
          fontWeight: '500',
          padding: '4px',
        },
        '& ol > li': {
          listStyle: 'decimal',
        },
        '& p': {
          overflowWrap: 'break-word',
        },
        '& p, & li, & table td': {
          '& > code': {
            background: '#eee',
            borderRadius: '4px',
            color: '#d73a4a',
            fontFamily: 'monospace',
            fontSize: '0.9em',
            paddingBlock: '2px',
            paddingInline: '4px',
          },
        },
        '& table': {
          '& th': {
            fontWeight: '600',
          },
          '& th, & td': {
            '&.center': {
              textAlign: 'center',
            },
            '&.nobr': {
              whiteSpace: 'nowrap',
            },
            border: '1px solid #3E3E43',
            fontSize: '16px',
            lineHeight: '1.5',
            md: {
              paddingX: '8px',
              paddingY: '4px',
            },
            smDown: {
              padding: '4px',
            },
            textAlign: 'left',
          },
          borderCollapse: 'collapse',
          marginX: '16px',
        },
        '& ul > li': {
          listStyle: 'disc',
        },
        '& ul, & ol': {
          '& > li': {
            '&::marker': {
              color: '#444',
            },
            my: '8px',
          },
          display: 'block',
          marginLeft: '32px',
          marginY: '16px',
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
        lineHeight: '1.8',
      })}
    >
      {children}
    </div>
  );
};
