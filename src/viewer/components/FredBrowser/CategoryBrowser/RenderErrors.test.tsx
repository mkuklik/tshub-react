// import React from "react";
// import { render, screen } from "@testing-library/react";
// import RenderErrors from "./RenderErrors";

// // Simple component to test
// function MyComponent({ items }) {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index} id="list-item">
//           {item}
//         </li>
//       ))}
//     </ul>
//   );
// }

// test('test', () => {
//   render(<MyComponent items={['Item 1', 'Item 2', 'Item 3']} />);

//   // Get all elements with the data-testid "list-item"
//   const listItems = screen.getAllByTestId('list-item');

//   // Assert that the correct number of items are rendered
//   expect(listItems).toHaveLength(3);

//   // Assert the content of each list item
//   expect(listItems[0]).toHaveTextContent('Item 1');
//   expect(listItems[1]).toHaveTextContent('Item 2');
//   expect(listItems[2]).toHaveTextContent('Item 3');
// });


// test('renders no list items when the array is empty', () => {
//   render(<MyComponent items={[]} />);
//   const listItems = screen.queryAllByTestId('list-item'); // Use queryAllBy* for empty arrays
//   expect(listItems).toHaveLength(0);
// });


// test("renders empty array", () => {
//   render(<RenderErrors errors={[]} />);
//   expect(screen.queryByRole("alert")).not.toBeInTheDocument();
// });

// test("renders single string error", () => {
//   render(<RenderErrors errors={["test error"]} />);
//   screen.debug();
//   const callout = screen.getByTestId("error-callout");
//   console.log("callout", callout);
//   expect(callout).toHaveTextContent("test error");
//   expect(callout).toHaveLength(1);
// });

// test("renders single object error", () => {
//   render(<RenderErrors errors={[{ message: "test error" }]} />);
//   expect(screen.getByRole("alert")).toHaveTextContent("test error");
// });

// test("renders single object error without message", () => {
//   render(<RenderErrors errors={[{}]} />);
//   expect(screen.getByRole("alert")).toHaveTextContent("");
// });

// test("renders multiple errors", () => {
//   render(
//     <RenderErrors errors={["test error 1", { message: "test error 2" }]} />
//   );
//   expect(screen.getAllByRole("alert").length).toBe(2);
//   expect(
//     screen.getByRole("alert", { name: /test error 1/i })
//   ).toBeInTheDocument();
//   expect(
//     screen.getByRole("alert", { name: /test error 2/i })
//   ).toBeInTheDocument();
// });

// test("renders null errors", () => {
//   render(<RenderErrors errors={null} />);
//   expect(screen.queryByRole("alert")).not.toBeInTheDocument();
// });

// test("renders undefined errors", () => {
//   render(<RenderErrors errors={undefined} />);
//   expect(screen.queryByRole("alert")).not.toBeInTheDocument();
// });
