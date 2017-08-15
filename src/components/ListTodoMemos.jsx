import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Collapse, Row, Col, Icon, Button } from 'antd';

/**
 * `新建事项`组件
 * 
 * @class ListTodoMemos
 * @extends {Component}
 */
class ListTodoMemos extends Component {
    constructor(props) {
        super(props);

        this.handleTodoing = this.handleTodoing.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }

    handleTodoing(e) {
        const changeIndex = e.target.getAttribute('data-key');
        this.props.onTodoToDoing(changeIndex);
    }

    handleDel(e) {
       const changeIndex = e.target.getAttribute('data-key');
       this.props.onDel(changeIndex); 
    }

    render() {
        let number = 0;
        this.props.todolist.map((item) => {
            if (item.istodo) {
                number += 1;
            }

            return true;
        });

        const collapseStyle = {
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto'
        };

        const Panel = Collapse.Panel;
        const header = (
            <Row>
                <Col span={22}>
                    <h3>新建事项</h3>
                </Col>
                <Col span={2}>
                    <Button size="small" shape="circle">
                        {number}
                    </Button>
                </Col>
            </Row>
        );

        return (
            <main>
                <Collapse style={collapseStyle}>
                    <Panel header={header}>
                    <ul>
                        {
                            this.props.todolist.map((item, i) => {
                                if (item.istodo) {
                                    return (
                                        <li key={i} style={{
                                            opacity: item.istodo ? '.7' : ''
                                        }}>
                                            <Row>
                                                <Col span={3}>
                                                    <input
                                                        type="checkbox"
                                                        checked={!item.istodo}
                                                        onChange={this.handleTodoing}
                                                        data-key={i}
                                                    />
                                                </Col>
                                                <Col span={20}>
                                                    <p>{item.todo}</p>
                                                </Col>
                                                <Col span={1}>
                                                    <Icon
                                                        type="close-circle"
                                                        data-key={i}
                                                        style={{fontSize: '20px'}}
                                                        onClick={this.handleDel}
                                                    />
                                                </Col>
                                            </Row>
                                        </li>
                                    );
                                }
                                return true;
                            })
                        }
                    </ul>
                    </Panel>
                </Collapse>
            </main>
        )
    }
}

ListTodoMemos.propTypes = {
    onTodoToDoing: PropTypes.func.isRequired,
    onDel: PropTypes.func.isRequired
};

export default ListTodoMemos;