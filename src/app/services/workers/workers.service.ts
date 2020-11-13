import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Injectable({
    providedIn: 'root'
})
export class WorkersService {

    constructor (
        private connectionService: ConnectionService
    ) { }

    updateUser(userUpdateParams: FormData): Promise<any> {
        return this.connectionService.postUrl('personal', userUpdateParams);
    }

    getUsers(page: number = 1): Promise<any> {
        return this.connectionService.getUrl('personal?page=' + page);
    }

    deleteUser(user_id: number): Promise<any> {
        return this.connectionService.deleteUrl('personal/' + user_id);
    }

    updateWorker(workerUpdateParams:FormData, userId): Promise<any> {
        return this.connectionService.postUrl('admin/worker/'+userId, workerUpdateParams);
    }

    nosotrosGet(page:number=1):Promise<any>{
        return this.connectionService.getUrl('nosotros?page='+page);
    }
    
    nosotrosStore(params:any):Promise<any>{
        return this.connectionService.postUrl('nosotros', params);
    }
    
    nosotrosEdit(params:any, id:number):Promise<any>{
        return this.connectionService.postUrl('nosotros/'+id,params);
    }

    nosotrosDelete(id:number):Promise<any>{
        console.log('service id', id);
        return this.connectionService.deleteUrl('nosotros/'+id);
    }

}
