

---

### Key Changes:

#### `handleOnSidebarToggle` function:

- This function calls `onSidebarToggle` to toggle the sidebar open/close state.
- The console log helps track the sidebar state.

#### `handleContainerClick` function:

- This function checks if the sidebar is open (`isSidebarOpen === true`).
- If it is, it closes the sidebar by calling `onSidebarToggle`.

#### `onClick` Event on `.main-container`:

- The `handleContainerClick` function is triggered when the `.main-container` is clicked.
- This ensures that the sidebar will close whenever the user clicks outside of it.

---


```javascript
const handleContainerClick = () => {
    if (isSidebarOpen) {
      onSidebarToggle();
    }
  };
```

### HTML Example (if needed):

```html
<div class="main-container" onclick="handleContainerClick()">
  <!-- Content here -->
</div>
```

---

