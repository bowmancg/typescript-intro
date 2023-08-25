// const names: Array<string> = []

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('DONE')
//     }, 2000);
// })

// promise.then(data => {
//     data.split(' ')
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Chandler", hobbies: ["Books"] }, { age: 24 });
console.log(mergedObj);

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'No Value.'
    if (element.length === 1) {
        descriptionText = 'Found 1 element'
    } else if (element.length > 1) {
        descriptionText = 'Found ' + element.length + ' elements.'
    }
    return [element, descriptionText]
}
console.log(countAndDescribe(['Cooking', 'Games']))

function extractConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}
extractConvert({name: 'Chandler'}, 'name')

class DataStorage<T extends string | number | boolean> {
    private data: T[] = []
    addItem(item: T) {
        this.data.push(item)
    }
    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return
        }
        this.data.splice(this.data.indexOf(item), 1)
    }
    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Chandler')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()

interface CourseGoal {
    title: string
    description: string
    completeUntil: Date
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = date
    return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['Chandler', 'Grant']
