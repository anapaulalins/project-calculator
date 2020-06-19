const btnsNumber = document.querySelectorAll('[data-number]')
const btnsOperation = document.querySelectorAll('[data-operation]')
const resulValue = document.querySelector('.resul-value')
const prevValue = document.querySelector('.prev-value')
const btnClearAll = document.querySelector('[data-all-clear]')
const btnDelete = document.querySelector('[data-delete]')
const btnEqual = document.querySelector('[data-equal]')
const operation = document.querySelector('.operation')

function calculator(resulValue, prevValue) {
    this.resulValue = resulValue
    this.prevValue = prevValue

    this.arrResult = []
    this.arrOperation = []

    this.appendOperation = (element) => {
        let last = this.arrOperation[this.arrOperation.length - 1]
        if (element.innerHTML === '.' && last === '.') return

        if (element.dataset.operation && last === '+') return
        if (element.dataset.operation && last === '-') return
        if (element.dataset.operation && last === 'x') return
        if (element.dataset.operation && last === '÷') return

        this.arrOperation.push(element.innerHTML)

        if (element.dataset.number) {
            this.arrResult.push(element.dataset.number)
            console.log(this.arrResult)
        } else if (element.dataset.operation) {
            this.arrResult.push(element.dataset.operation)
            console.log(this.arrResult)
        }

    }

    this.updateOperation = () => {
        this.prevValue.innerHTML = this.arrOperation.join('')
    }

    this.appendResul = () => {
        let join_resul = this.arrResult.join('')
        this.result = eval(join_resul)
        return this.result
    }

    this.updateResul = (value) => {
        this.resulValue.innerHTML = value
    }

    this.clearAll = () => {
        this.arrOperation = []
        this.arrResult = []
    }

    this.delete = () => {
        this.arrOperation.pop()
        this.arrResult.pop()
    }

    this.equal = () => {
        this.arrResult = []
        this.arrOperation = []
        this.arrOperation.push(this.result)
        this.arrResult.push(this.result)
        console.log(this.arrResult, this.arrOperation)

    }

}

const cal = new calculator(resulValue, prevValue)

btnsNumber.forEach(btn => {
    btn.addEventListener('click', () => {
        cal.appendOperation(btn)
        cal.updateOperation()
        cal.updateResul(cal.appendResul())
    })
})

btnsOperation.forEach(btn => {
    btn.addEventListener('click', () => {
        cal.appendOperation(btn)
        cal.updateOperation()
        cal.updateResul(cal.appendResul())
    })
})

btnClearAll.addEventListener('click', () => {
    cal.clearAll()
    cal.updateOperation()
    cal.updateResul(' ')
})

btnDelete.addEventListener('click', () => {
    cal.delete()
    cal.updateOperation()
    cal.updateResul(' ')
})
btnEqual.addEventListener('click', () => {
    cal.equal()
    cal.updateOperation()
    cal.updateResul(' ')
})