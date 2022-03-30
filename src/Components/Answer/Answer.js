import React from 'react';

const Answer = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2>How react works?</h2>
                    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                    <h2>Difference between props and state:</h2>
                    <p>Props:The Data is passed from one component to another.It is Immutable (cannot be modified).Props can be used with state and functional components.Props are read-only.</p>
                    <p>State:The Data is passed within the component only.It is Mutable ( can be modified).State can be used only with the state components/class component (Before 16.0).State is both read and write.</p>
                    <h2>How to work useState?</h2>
                    <p>useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value</p>
                </div>
            </div>
        </div>
    );
};

export default Answer;