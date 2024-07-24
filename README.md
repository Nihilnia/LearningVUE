# Side notes

`v-on`

`v-bind`

`v-for`

`v-once`

`v-model`

`$event`

## data

- function itself.
- returns all the data we want to use.
  ```jsx
  data() {
      return {
        someData: "someValue",
      };
    },
  ```

## methods

- We are defining our functions here.

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
