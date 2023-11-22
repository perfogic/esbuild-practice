import { Readable, Writable, Transform } from "stream";

class SampleReadableStream extends Readable {
  private data: any[];
  private index: number;

  constructor() {
    super();
    this.data = [];
    this.index = 0;
  }

  _read() {
    if (this.index < this.data.length) {
      this.push(this.data[this.index]);
      this.index++;
    } else {
      this.push(null);
    }
  }

  pushValue(value: number) {
    this.data.push(
      JSON.stringify({
        test: {
          value,
        },
      })
    );
    this.emit("readable");
  }
}

class SampleTransformStream extends Transform {
  _transform(chunk: Buffer, encoding: string, callback: () => void) {
    const transformedData = chunk;
    this.push(transformedData);
    callback();
  }
}

class SampleWritableStream extends Writable {
  _write(chunk: Buffer, encoding: string, callback: () => void) {
    console.log(JSON.parse(chunk.toString()).test.value);
    callback();
  }
}

const readableStream = new SampleReadableStream();
const transformStream = new SampleTransformStream();
const writableStream = new SampleWritableStream();

readableStream.pipe(transformStream).pipe(writableStream);

export { readableStream };
