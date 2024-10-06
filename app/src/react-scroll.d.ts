declare module 'react-scroll' {
    import * as React from 'react';
  
    interface LinkProps {
      to: string;
      spy?: boolean;
      smooth?: boolean;
      hashSpy?: boolean;
      offset?: number;
      duration?: number;
      delay?: number;
      isDynamic?: boolean;
      onClick?(): void;
      containerId?: string;
      activeClass?: string;
      className?: string;
      activeStyle?: React.CSSProperties;
      style?: React.CSSProperties;
      onSetActive?(): void;
      onSetInactive?(): void;
      ignoreCancelEvents?: boolean;
    }
  
    export class Link extends React.Component<LinkProps, any> {}
  }
  