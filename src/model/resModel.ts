class BaseModel {
  data: any | null;
  message?: string;
  errno?: number;

  constructor(data: any, message?: string, errno?: number) {
    if (typeof data === "string") {
      this.message = data;
    }
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }

    this.errno = errno;
  }
}

class SuccessModel extends BaseModel {
  constructor(data: any, message?: string) {
    super(data, message, 0);
  }
}

class ErrorMode extends BaseModel {
  constructor(data: any, message?: string) {
    super(data, message, -1);
  }
}

export { SuccessModel, ErrorMode };
