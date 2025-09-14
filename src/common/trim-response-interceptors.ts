import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TrimUserResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map((data) =>
          this.trimFields(data, [
            'providerId',
            'createdAt',
            'updatedAt',
            'password',
            'pushNotificationToken',
          ]),
        ),
      );
  }

  private trimFields(data: any, fieldsToRemove: string[]): any {
    return this.removeFields(data, fieldsToRemove);
  }

  private removeFields(obj: any, fields: string[]): any {
    if (Array.isArray(obj)) {
      return obj.map((item) => this.removeFields(item, fields));
    } else if (typeof obj === 'object' && obj !== null) {
      const cleanedObject = {};
      for (const key of Object.keys(obj)) {
        if (!fields.includes(key)) {
          cleanedObject[key] = this.removeFields(obj[key], fields);
        }
      }
      return cleanedObject;
    }
    return obj;
  }
}

@Injectable()
export class TrimUpdateExtraUserInfoResponseInterceptor
  implements NestInterceptor
{
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return this.trimFields(data, [
          'providerId',
          'createdAt',
          'updatedAt',
          'password',
        ]);
      }),
    );
  }

  private trimFields(data: any, fieldsToRemove: string[]): any {
    if (Array.isArray(data)) {
      return data.map((item) => this.removeFields(item, fieldsToRemove));
    } else if (typeof data === 'object' && data !== null) {
      return this.removeFields(data, fieldsToRemove);
    }
    return data;
  }

  private removeFields(obj: any, fields: string[]): any {
    const cloned = { ...obj };
    for (const field of fields) {
      delete cloned[field];
    }
    return cloned;
  }
}

@Injectable()
export class TrimGetClustersResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return this.trimFields(data, ['centroid_embedding', 'embedding']);
      }),
    );
  }

  private trimFields(data: any, fieldsToRemove: string[]): any {
    if (Array.isArray(data)) {
      return data.map((item) => this.removeFields(item, fieldsToRemove));
    } else if (typeof data === 'object' && data !== null) {
      return this.removeFields(data, fieldsToRemove);
    }
    return data;
  }

  private removeFields(obj: any, fields: string[]): any {
    const cloned = { ...obj };
    for (const field of fields) {
      delete cloned[field];
    }
    return cloned;
  }
}

@Injectable()
export class TrimGetNewsResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return this.trimFields(data, [
          'embedding',
          'places_in_detail',
          'content',
          'content_en',
        ]);
      }),
    );
  }

  private trimFields(data: any, fieldsToRemove: string[]): any {
    if (Array.isArray(data)) {
      return data.map((item) => this.removeFields(item, fieldsToRemove));
    } else if (typeof data === 'object' && data !== null) {
      return this.removeFields(data, fieldsToRemove);
    }
    return data;
  }

  private removeFields(obj: any, fields: string[]): any {
    const cloned = { ...obj };
    for (const field of fields) {
      delete cloned[field];
    }
    return cloned;
  }
}
