import { makeAutoObservable } from "mobx";
import storageService from "../services/storageService";
import { defaultBoardTasks, defaultBoards } from "../constants/boards";

class BoardsStore {
    boards = storageService.getStorageItem('boards') || defaultBoards;
    activeBoardId = storageService.getStorageItem('activeBoardId') || 'MAIN';
    boardTasks = storageService.getStorageItem('boardTasks') || defaultBoardTasks;

    constructor() {
        makeAutoObservable(this);
    }

    get activeBoard() {
        return this.boards.find((board) => board.id === this.activeBoardId);
    }

    get currentBoardTasks() {
        return this.boardTasks[this.activeBoardId];
    }

    get boardsList() {
        return this.boards.map(({ id, title }) => ({ id, title }));
    }

    // TODO:
    // addBoard(board) {
    //     this.boards.push(board)
    // }

    setActiveBoard = (id) => {
        this.activeBoardId = id;

        storageService.setStorageItem('activeBoardId', id);
    }

    moveTask = (id, source, destination) => {
        const fromSection = this.boardTasks[this.activeBoardId].find((section) => section.id === source.droppableId);
        const toSection = this.boardTasks[this.activeBoardId].find((section) => section.id === destination.droppableId);

        const taskToMoveIndex = fromSection.tasks.findIndex((task) => task.id === id);
        const [task] = fromSection.tasks.splice(taskToMoveIndex, 1);

        toSection.tasks.splice(destination.index, 0, task);

        storageService.setStorageItem('boardTasks', this.boardTasks);
    }
}

const boardsStore = new BoardsStore();


export default boardsStore;