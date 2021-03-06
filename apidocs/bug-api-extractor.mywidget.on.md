<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [bug-api-extractor](./bug-api-extractor.md) &gt; [MyWidget](./bug-api-extractor.mywidget.md) &gt; [on](./bug-api-extractor.mywidget.on.md)

## MyWidget.on() method

The "start" event is when `run` has started. The "done" event is emitted when `run` has finished.

<b>Signature:</b>

```typescript
on(eventName: 'start' | 'done', listener: () => void): this;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  eventName | 'start' \| 'done' | The name of the event - always <code>start</code> or <code>done</code>. |
|  listener | () =&gt; void | The listener function to call when the event is emitted. |

<b>Returns:</b>

this

