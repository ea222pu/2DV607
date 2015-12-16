# initialState()

It took me quite a while to get the `mapStateToProps` to work correctly, and I felt like i tried anything. Then I realized, when looking at an React-Redux example, that I had written `module.exports = Redux.createStore(reducer, initState)`, instead of `initState**()**` in `store.js... Now all is well.