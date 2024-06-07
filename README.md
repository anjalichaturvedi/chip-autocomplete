# Chip AutoComplete Component

This repository contains a React component called `ChipAutoComplete` which provides functionality similar to the provided design. The component allows users to input tags, create chips from the input, remove chips, and displays suggestions dynamically.

## Functionality

- Users can type in the search box, and upon pressing Enter, a chip is created with the typed text.
- Chips can be removed by clicking on the cross icon.
- Duplicate chips are not allowed. Once added, they are removed from the suggestions list.
- Suggestions list dynamically updates as the user types.
- Blue highlights are applied to dynamically match the input text in the suggestions list.
- The app is mobile responsive up to 400px.

## Features

- Single reusable component: The `ChipAutoComplete` component can be used anywhere in the app.
- Handles necessary edge cases such as duplicate chips and empty input.
- Additional features:
  - Loading indicator: Simulates loading with a loading message.
  - Clear all chips button: Allows users to clear all chips at once.
  - No results message: Displays when there are no matching suggestions.

## Tech Stack

- React: Used for building the UI components.
- PropTypes: Used for type-checking the component props.
- CSS: Custom styling for the component.

## Thought Process

#### Understanding Requirements:
- **Initial Assessment**: First, I carefully read through the provided requirements and analyzed the design mockup to understand the functionality and appearance expected.
- **Component Breakdown**: I identified the key features required and components needed to fulfill the functionality, such as input handling, chip creation, chip removal, and dynamic suggestions.

#### Planning and Architecture:
- **Component Design**: I planned to create a single reusable component, `ChipAutoComplete`, encapsulating all the required functionality.
- **Props Design**: I considered the props needed to make the component flexible and customizable, such as suggestions list, placeholder text, loading indicator, etc.
- **State Management**: I decided to use React's state management to handle user input, chip creation, suggestion filtering, and loading states.

#### Development:
- **Step-by-Step Implementation**: I followed an incremental development approach, starting with basic functionality and gradually adding more features.
- **Commit Strategy**: I committed changes at regular intervals, making it easier to track progress and roll back changes if needed.
- **Testing**: I continuously tested the component as I implemented each feature, ensuring it behaves as expected in various scenarios.
- **Edge Cases Handling**: I paid special attention to handling edge cases, such as empty input, duplicate chips, and keyboard navigation.

#### Styling and Responsiveness:
- **Styling Approach**: I used custom CSS for styling, aiming to match the provided design as closely as possible.
- **Responsive Design**: I ensured that the component is mobile-responsive up to 400px width, making adjustments to layout and styling as needed.

#### Documentation:
- **Readme**: I documented the component's usage, functionality, features, tech stack, and edge cases handling in the readme file to provide clear instructions and insights into the development process.
- **Code Comments**: I added comments within the code to explain complex logic, improve readability, and aid future maintenance.

#### Future Considerations:
- **Feature Enhancement**: I brainstormed potential future improvements, such as adding animations, more customization options, and accessibility enhancements.
- **Community Contribution**: I kept the project open to community contributions, inviting feedback, suggestions, and contributions to improve the component further.

## Usage

To use the `ChipAutoComplete` component, import it into your React application and pass the necessary props:
``` import ChipAutoComplete from './ChipAutoComplete'; 

function App() {
  return (
    <div className="App">
      <ChipAutoComplete 
        suggestions={['React', 'JavaScript', 'CSS', ...]} 
        noResultsMessage="No matching suggestions found" 
        loadingMessage="Loading..." 
        placeholder="Enter a tag" 
        showLoading={true} 
      />
    </div>
  );
}

export default App; ```

## Edge Cases Handling

- **Empty input**: If the user tries to add an empty tag, it's not added as a chip.
- **Duplicate chips**: Chips are filtered out from the suggestions list to prevent duplicates.
- **Keyboard navigation**: Users can navigate through suggestions using the arrow keys.

## Styling and Responsiveness

- **Styling Approach**: Custom CSS is used for styling, aiming to match the provided design as closely as possible.
- **Responsive Design**: The component is mobile-responsive up to 400px width, making adjustments to layout and styling as needed.
