import LinkList from '../src/LinkList'

let linkList;
beforeEach(() => {
    linkList = new LinkList();

})
describe('LinkList TestCases', () => {

    test('LinkList Tail init', () => {
        linkList.InitByTailInsert(1, 2, 3, 4, 8, 7, 6, 5);
        expect(linkList.LinkListSize()).toBe(8);
        expect(linkList.toString()).toBe('1 -> 2 -> 3 -> 4 -> 8 -> 7 -> 6 -> 5');
    })

    test('LinkList Head init', () => {
        linkList.InitByHeadInsert(1, 2, 3, 4, 8, 7, 6, 5);
        expect(linkList.LinkListSize()).toBe(8);
        expect(linkList.toString()).toBe('5 -> 6 -> 7 -> 8 -> 4 -> 3 -> 2 -> 1');
    })

    test('LinkList GetElemByIndex', () => {
        linkList.InitByTailInsert(1, 2, 3, 4, 8, 7, 6, 5);
        let node = linkList.GetElemByIndex(3);
        expect(node.value).toBe(4);
        expect(node.next.value).toBe(8);
        node = linkList.GetElemByIndex(7);
        expect(node.value).toBe(5);
        node = linkList.GetElemByIndex(-1);
        expect(node).toBeNull;
        node = linkList.GetElemByIndex(8);
        expect(node).toBeNull;
    })

    test('LinkList GetElemByValue', () => {
        linkList.InitByTailInsert(1, 2, 3, 4, 8, 7, 6, 5);
        let node = linkList.GetElemByValue(1);
        expect(node.value).toBe(1);
        expect(node.next.value).toBe(2);
        node = linkList.GetElemByValue(7);
        expect(node.value).toBe(7);
        expect(node.next.value).toBe(6);
        node = linkList.GetElemByValue(5);
        expect(node.value).toBe(5);
        expect(node.next).toBeNull;
        node = linkList.GetElemByValue(11);
        expect(node).toBeNull;
    })

    test('LinkList Insert', () => {
        linkList.InitByTailInsert(1, 2, 3, 4, 8, 7, 6, 5);
        let node = linkList.GetElemByValue(3);
        linkList.InsertAfter(node, 22);
        linkList.InsertBefore(node, 11);
        expect(linkList.toString()).toBe('1 -> 2 -> 11 -> 3 -> 22 -> 4 -> 8 -> 7 -> 6 -> 5');
        linkList.InsertByIndex(-1, 33);
        linkList.InsertByIndex(10, 33);
        linkList.InsertByIndex(6, 33);
        expect(linkList.toString()).toBe('1 -> 2 -> 11 -> 3 -> 22 -> 4 -> 33 -> 8 -> 7 -> 6 -> 5');
    })

    test('LinkList Delete', () => {
        linkList.InitByTailInsert(1, 2, 3, 4, 8, 7, 6, 5);
        let node = linkList.GetElemByValue(3);
        const head = linkList.getHead();
        expect(head.value).toBe(1);
        expect(head.next.value).toBe(2);
        linkList.DeleteCurrNode(node);
        linkList.DeleteCurrNode(head);
        expect(linkList.toString()).toBe('2 -> 4 -> 8 -> 7 -> 6 -> 5');
        expect(linkList.LinkListSize()).toBe(6);
        linkList.DeleteByIndex(-1);
        linkList.DeleteByIndex(6);
        linkList.DeleteByIndex(1);
        expect(linkList.toString()).toBe('2 -> 8 -> 7 -> 6 -> 5');
        let i = -1;
        while (++i < 5) {
            linkList.DeleteByIndex(0);
        }
        expect(linkList.LinkListSize()).toBe(0);
        expect(linkList.isEmpty()).toBeTruthy();
    })

})
