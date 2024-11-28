import * as React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { Spinner as SpinnerBase } from "@blueprintjs/core";
import { isNil } from "ramda";

// const Spinner = styled(SpinnerBase)`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(191, 204, 214, 0.2);
`;

const Container = styled.div`
  /* TODO: customize this in parent component */
  display: flex;
  flex-direction: column;
  height: 100%;
`;

interface LoadableProps {
  isLoading: boolean;
  className?: string;
}

// const Loadable = (WrappedComponent: React.ComponentType<any>) => (props: any) => {
//   console.log('Component rendered with props:', props);
//   return <WrappedComponent {...props} />;
// };

// const Loadable: React.FC<LoadableProps> = ({
//   children,
//   isLoading,
//   className,
// }) => {
//   return (
//     <div style={{ border: "1px solid blue", padding: "10px" }}>
//       {/* {!isLoading && <div>{children}</div>} */}
//       {isLoading && (
//         // <>
//         //   <Overlay />
//         //   <Spinner size={32} />
//         // </>
//         <Container>
//           <Spinner />
//         </Container>
//       )}
//     </div>
//   );
// };

const Loadable =
  <P extends {}>(Component: React.FC<P>) =>
  ({ isLoading, className, ...props }: LoadableProps & P) =>
    (
      <Container className={className}>
        {!isLoading && <Component {...props} />}

        {isLoading && (
          // <>
          //   <Overlay />
          //   <Spinner size={32} />
          // </>
          <Container>
            <Spinner />
          </Container>
        )}
      </Container>
    );

export { Loadable };

// import * as React from 'react';
// import styled from 'styled-components';
// import { Spinner as SpinnerBase } from '@blueprintjs/core';

// // const Container = styled.div`
// //   position: relative;
// // `;

// const Spinner = styled(SpinnerBase)`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(191, 204, 214, 0.2);
// `;

// const Container = styled.div`
//   /* TODO: customize this in parent component */
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// `;

// const Loadable = (Component) => (
//   ({ isLoading, className, ...props }) => (
//     <Container className={className}>
//       {/* eslint-disable-next-line react/jsx-props-no-spreading */}
//       {!isLoading
//       && <Component {...props} />}

//       {isLoading && (
//       // <>
//       //   <Overlay />
//       //   <Spinner size={32} />
//       // </>
//       <Container>
//         <Spinner />
//       </Container>
//       )}
//     </Container>
//   )
// );

// // eslint-disable-next-line import/prefer-default-export
// export { Loadable };
