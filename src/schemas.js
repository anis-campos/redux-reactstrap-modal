import { schema} from "normalizr";


export const dialogSchema = new schema.Entity('dialogs', undefined, {idAttribute: 'name'});

