// App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PageHeader from '../PageHeader';

test('props.tabKeys array contains unique tabKeys', () => {
    const correctTabArray = [
        {
            tabKey: '0',
            tabContent: 'Home'
        },
        {
            tabKey: '1',
            tabContent: 'About Us'
        },
        {
            tabKey: 'abc',
            tabContent: 'Do Not Click'
        }
    ]

    const incorrectTabArray = [
        {
            tabKey: '0',
            tabContent: 'Lorem Ipsum'
        },
        // tabKey below is incorrect
        {
            tabKey: '0',
            tabContent: 'Incorrect Tab Key'
        },
        {
            tabKey: '-1',
            tabContent: 'Fine'
        }
    ]
 
   // render(<PageHeader tabs={correctTabArray} />)

   // expect(correctTabArray.every( e => screen.getByText(e.tabContent))
 //Text tree = component.toJSON();
  //expect(true).toBeTruthy();
});

test('Link changes the class when hovered', () => {



    
//   const component = renderer.create(
//     <Link page="http://www.facebook.com">Facebook</Link>,
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
});