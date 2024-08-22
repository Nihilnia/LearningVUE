# Side notes

| **Keyword**   | **Description**              | **Shorter** | **Example**             | **Usage/Notes**                                                            |
| ------------- | ---------------------------- | ----------- | ----------------------- | -------------------------------------------------------------------------- |
| **`v-on`**    | Event binding                | `@`         | `@click="handleClick"`  | Binds an event listener to an element.                                     |
| **`v-bind`**  | Attribute binding            | `:`         | `:src="imageSrc"`       | Dynamically binds an attribute to an expression.                           |
| **`v-for`**   | List rendering               |             | `v-for="item in items"` | Renders a list of items using an array or object.                          |
| **`v-once`**  | Render element & component   |             | `v-once`                | Renders the element/component only once. Prevents re-rendering on updates. |
| **`v-model`** | Two-way data binding         |             | `v-model="inputValue"`  | Creates a two-way binding on form inputs.                                  |
| **`v-if`**    | Conditional rendering        |             | `v-if="isVisible"`      | Renders the element based on the truthy value of an expression.            |
| **`v-else`**  | Conditional rendering (else) |             | `v-else`                | Must be used after `v-if` or `v-else-if` for conditional rendering.        |
| **`v-show`**  | Toggle element visibility    |             | `v-show="isVisible"`    | Toggles the display of an element via CSS `display`.                       |
| **`v-text`**  | Text content binding         |             | `v-text="message"`      | Updates the text content of an element.                                    |
| **`v-html`**  | Raw HTML binding             |             | `v-html="rawHTML"`      | Binds raw HTML to an element.                                              |

## Data

- function itself.
- returns all the data we want to use.
  ```jsx
  data() {
      return {
        someData: "someValue",
      };
    },
  ```

## Methods

- We are defining our functions here.
  ```jsx
  methods: {
    doSomething(){
      //processes..
    }
  }
  ```

## computed

- If the data you are showing in the page that changes dynamically then you are using computed properties.

<aside>
💡 When using computed properties with interpolation we should use them directly like variables.

</aside>

```jsx
computed: {
	computedFullName(){
		return `${this.name} ${this.lastName}`
	}
}

<p>Your Name: {{ computedFullName }}</p>
```

## watch

- Our watchers lives here!

<aside>
💡 Name of the watcher must be the same that what you want to watch.

</aside>

```jsx
watch: {
	name(newVal, oldVal){
		console.log(`New value of the name: ${newVal},
									old value was: ${oldVal}`)
		this.fullName = `${newVal} ${this.lastName}`
	}
}
```

```jsx
Vue.createApp({
  data() {
    return {
      someData: "someValue",
    };
  },
  methods: {
    someFunction() {
      return "Do something here";
    },
  },
  computed: {
    someComputed() {
      return this.someData + " " + "Computed";
    },
  },
  watch: {
    someData() {
      console.log("Some data changed");
    },
  },
});
```
