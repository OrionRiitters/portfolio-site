import { validateSection } from '../mockDataValidator';

test('mock functions', () => {
    function callCallback(items: Array<any>, callback: Function) {
        items.map(e => callback(e));
    }
    const mockCallback = jest.fn(x => `Hello, ${x}`);
    callCallback(['Jim', 'Sam', 'Philadelphia'], mockCallback);

    expect(mockCallback.mock.calls.length).toBe(3);
    expect(mockCallback.mock.calls[0][0]).toBe('Jim');
});