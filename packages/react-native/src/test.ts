import proxyquire = require('proxyquire')
import test = require('@fanny-pack/test')
import AsyncStorage from 'mock-async-storage'

const Implementation = proxyquire('./', {
  'react-native': { AsyncStorage: new AsyncStorage(), '@noCallThru': true }
})

test(new Implementation('test'))
