# API Design

_WORK IN PROGRESS - SUGGESTIONS ARE VERY WELLCOME ;)_

This is a place for openly formulated design iterations preceding implementation. The implemented ready to used API reference will be generated automatically from inlined documentation. 

<img src="https://docs.google.com/drawings/d/1Wep2ezu1ysOQv079CDwIswonGtYQZWKEUIga0CqtkH8/pub?w=829&h=137" />

## Configs
WIP

## Scene Parsing
* ms.scene.find
* ms.scene.findFirst
* ms.scene.getChildren
* ms.scene.getParent

## Scene Editing
* ms.scene.add
* ms.scene.remove

## Storage
* ms.storage.load
* ms.storage.save
* ms.storage.setAutoSave

## Import
* ms.import.ms1
* ms.import.ifc

## Export
* ms.export.ms1
* ms.export.ifc

## Real-time Collaboration
* ms.channel.open
* ms.channel.close
* ms.channel.join
* ms.channel.leave

## Events
### Listeners
simple event listener:
```javascript
entity.on('add', callback)
```
one time listener:
```javascript
entity.once('add', callback)
```
returns a promise when no callback function is provided:
```javascript
entity.once('add').then( callback)
```
catch all events of a specific entity:
```javascript
entity.on('*', callback)
```
multiple events in one handler:
```javascript
entity.on(['add','remove'], callback)
```

### Hierarchy
catch all events of a specific property:
```javascript
entity.on('add', callback)
```
include all children (recursive):
```javascript
entity.on('**/add', callback)
```
include direct children only (non-recursive):
```javascript
entity.on('*/add', callback)
```
include all parent (recursive):
```javascript
entity.on('.../add', callback)
```
include direct parent only (non-recursive):
```javascript
entity.on('../add', callback)
```

### Selectors
by id:
```javascript
scene.on('**/#myEntityId:update', callback)
```
by class
```javascript
scene.on('**/.window:update', callback)
```

### Property Updates
geometries
```javascript
entity.on('update.geometries', callback)
```
geometries and materials
```javascript
entity.on(['update.geometries','update.materials'], callback)
```