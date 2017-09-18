class TicTacToe {
    constructor() {

        this.CurrentPlayerSymbol = 'x';
        this.Field = [new Array(3).fill(null), new Array(3).fill(null), new Array(3).fill(null)];
        this.Winner = null;
    }

    get FieldColumns() {
        return [
            [this.Field[0][0], this.Field[1][0], this.Field[2][0]],
            [this.Field[0][1], this.Field[1][1], this.Field[2][1]],
            [this.Field[0][2], this.Field[1][2], this.Field[2][2]]
        ];
    }

    get FieldDiagonal1() {
        return [this.Field[0][0], this.Field[1][1], this.Field[2][2]];
    }

    get FieldDiagonal2() {
        return [this.Field[2][0], this.Field[1][1], this.Field[0][2]];
    }

    checkWinCondition() {
        let WinCondition = new Array(3).fill(this.CurrentPlayerSymbol).join('');
        for (let row of this.Field) {
            if (row.join('') == WinCondition) {
                return true;
            }
        }
        for (let column of this.FieldColumns) {
            if (column.join('') == WinCondition) {
                return true;
            }
        }
        if (this.FieldDiagonal1.join('') == WinCondition || this.FieldDiagonal2.join('') == WinCondition) {
            return true;
        }
        return false;
    }

    changePlayer() {
        this.CurrentPlayerSymbol = (this.CurrentPlayerSymbol === "x") ? "o" : "x";
    }

    getCurrentPlayerSymbol() {
        return this.CurrentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        //console.log(this.Field);
        if (this.Field[rowIndex][columnIndex] === null) {
            this.Field[rowIndex][columnIndex] = this.CurrentPlayerSymbol;
            //console.log(this.Field);
            if (this.checkWinCondition() && this.Winner == null) {
                this.Winner = this.CurrentPlayerSymbol;
            }
            this.changePlayer();

        }
    }

    isFinished() {
        return !!this.Winner || this.isDraw();
    }

    getWinner() {
        return this.Winner;
    }

    noMoreTurns() {
        for (let row of this.Field) {
            if (row.includes(null)) {
                return false;
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.Field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;