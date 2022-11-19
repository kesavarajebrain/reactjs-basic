import React, { Component } from 'react'

export class Lifecycle2component extends Component {
    constructor(props) {
        super(props)
        // 1 st execution - Mounting
        console.log('CHILD')
        console.log('1 st execution(Mounting) - Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        // props, state - syntax
        // 2 nd execution - Mounting
        console.log('CHILD')
        console.log(' 2 nd execution(Mounting) - static getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        // 4 th execution - Mounting
        // actually 3 rd is the render method after we put this its getting 1,2,3,4 order so that adding here for check the scanario
        console.log('CHILD')
        console.log(' 4 th execution(Mounting) - componentDidMount')
    }

    //Updating Method
    shouldComponentUpdate() {
        // getDerivedStateFromProps - 1 method already defined
        // II st Execution
        console.log('CHILD')
        console.log('II st Execution(Updating) - shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // render - 3 rd method already there
        // IV th Execution 
        console.log('CHILD')
        console.log('IV th Execution(Updating) - getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        // V th method
        console.log('CHILD')
        console.log('5 th Execution(Updating) - componentDidUpdate')
    }
    render() {
        // 3 rd execution - Mounting
        console.log('CHILD')
        console.log('3 rd execution(Mounting) - render')
        return (
            <div>Lifecycle2 - Child Component (Check console)</div>
        )
    }
}

export default Lifecycle2component