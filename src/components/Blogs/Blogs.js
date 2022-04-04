import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-primary fw-bold mt-5'>Question Answers</h1>
            <Accordion className='container mt-5' defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. What is Context API?</Accordion.Header>
                    <Accordion.Body>
                        It is a new feature of React which helps child components to access data from the parent component without props handling. So, if we use Context API,  we can access the state from any child component without using props. It is the alternative to moving props from parent component to child component, which is much easier to use.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. What are the semantic tags?</Accordion.Header>
                    <Accordion.Body>
                    We use many tags in HTML5. Some of these tags are semantic and some of these are non-semantic. Semantic tags are the tags that have similar meanings to the tags such as table, header, section, article, etc. Which we can use to, create a table, define a header section or create a section, which are more meaningful in the HTML. Anyone can easily understand the tags and what are they used for, while looking at the code.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. What are the differences between inline, block and inline-block elements?</Accordion.Header>
                    <Accordion.Body>
                    An inline element is used to set an element to show only the element in a line, it doesn't create a new line. The display: inline; property defines it to use in HTML. Where a block element is different. It takes up the entire block to show. display: block; is the property we use to show a block element. Compared to the inline and the block element, the main difference is that the inline-block element allows to set a width and height on the element, it also does not add a line-break.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;