
import {DoublyListNode} from './Node';
import Linklist from 'Linklist';

export class DoublyLinkList extends Linklist{
    constructor(value, next) {
        super(value, next);
        this.prev = null;//前驱指针
        this.tail = null;//尾指针
    }
}