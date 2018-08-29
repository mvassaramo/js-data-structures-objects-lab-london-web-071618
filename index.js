// Write your solution in this file!
const driver = {};


const updateDriverWithKeyAndValue = (driver, key, value) => Object.assign({}, driver, {[key]: value})


const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => Object.assign(driver, {[key]: value})

const deleteFromDriverByKey = (driver, key) => {
      const newObject = Object.assign({}, driver)
      delete newObject[key]
      return newObject
    }

const destructivelyDeleteFromDriverByKey = (driver, key) => delete driver[key]
