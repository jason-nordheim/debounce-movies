# About this Repo

This repository was created to illustrate the concept of _debounce_ and demonstrate how to implement the _debounce pattern_ in [React](https://reactjs.org/) as a custom hook.

## Debounce

The term 'Debounce' refers to a pattern used in asynchronous software development where a piece of code is delayed, on purpose, in an effort to improve performance.

### How does the Debounce Pattern improve performance?

One of the most common use cases for the _debounce pattern_ (and the use-case implemented for this example application) is for features like _queries_.

In an effort to streamline the user-experience, modern web applications are built to make the end-user experience as simple and intuitive as possible. This primarily involves making the process as simple as possible and removing any unnecessary steps.

One of the most common use-cases is in _querying_ or searching. Think about sites like [google](https://www.google.com/), as you start typing into the search field, the text is automatically parsed and behind the scenes the text is being inspected, and processed.

In React, this functionality can be implemented pretty easily using React's `useEffect` hook to re-execute the search whenever the text entered by the user changes. Technically that will work, but that means that if a user is wants to search for "Terminator" the `useEffect` hook will be invoked `10` times - once for each key press.

And that's assuming no typos.

So what's the problem? Simple, performance.

### Understanding Debounce in React

Network requests are commonly known as "expensive" operations as these operations can significantly impact the applications performance. To better understand this, allow me to illustrate an example in the context of a React application.

This repository contains an example React application that searches movies from the [OMDB API](www.omdbapi.com). In this application there is an `<input />` that a user enters in text to search against the API. In the `no_debounce` project, a user needs to click the search button in order to invoke the network request to retrieve the data from the [OMDB API](www.omdbapi.com). That is because invoking the `GET` request to the API everytime the search value changes would create a request for each keypress, and depending on network speed, the amount of data, and a variety of other factors could result in requests being generated faster than they could be responded to and processed by the front-end React app.

In the `no_debounce` project, the network requests are limited because they only occur when the user clicks "Search".

Conversely, the `debounce` version of the React application forgoes the "Search" button and re-executes the search whenever the search text changes, but limits the number of requests made through the use of the _debounce pattern_ where it adds a delay. This delay specifies that the effect - in this case the "search" - can only be re-executed after waiting the specified delay period.

This has multiple benefits:

- Cost - some APIs are billed by the number of requests. We can reduce cost by only sending a HTTP requests when the value is finalized (e.g. the user has stopped typing).
- Performance - As outlined above, network requests are expensive since they involve communicating across the internet to a server, then waiting for that server to process the request, and send the response. The front-end of the application then has to process the response, and typically will have additional actions depending on the contents of the response. Doing this unnecessarily wastes CPU cycles and can result in delays and freezes that degrade the user-experience.

> This benefits performance both server-side and client-side, reducing the overall number of operations executed on throughout an application stack.

## Repo Structure

There are two main directories in this repository:

1. `debounce`
2. `no_debounce`

The `debounce` and `no_debounce` directories are essentially the same React application. However, in the `no_debounce` project, searching for movies is executed by the user when they click the "Search" button.
