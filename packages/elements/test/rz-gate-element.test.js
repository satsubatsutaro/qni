import '../dist/index'
import {testActivateable} from './common/test-activateable'
import {testDisableable} from './common/test-disableable'
import {testDraggableOperation} from './common/test-draggable'
import {testElementCreation} from './common/test-element-creation'
import {testHoverable} from './common/test-hoverable'
import {testIconable} from './common/test-iconable'
import {testIfable} from './common/test-ifable'
import {testWireableOperation} from './common/test-wireable'

describe('rz-gate element', function () {
  describe('element creation', function () {
    testElementCreation(window.RzGateElement, 'rz-gate')
  })

  describe('hoverable', function () {
    testHoverable('rz-gate')
  })

  describe('activateable', function () {
    testActivateable('rz-gate')
  })

  describe('iconable', function () {
    testIconable('rz-gate')
  })

  describe('disableable', function () {
    testDisableable('rz-gate')
  })

  describe('wireable', function () {
    testWireableOperation('rz-gate')
  })

  describe('draggable', function () {
    testDraggableOperation('rz-gate')
  })

  describe('ifable', function () {
    testIfable('rz-gate')
  })
})
