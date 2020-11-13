import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private connectionService:ConnectionService
  ) { }

  updateUser(userUpdateParams:FormData):Promise<any>{
    return this.connectionService.postUrl('users', userUpdateParams);
  }

  getUsers(page:number=1):Promise<any>{
    return this.connectionService.getUrl('client?page='+page);
  }

  getAllUsers():Promise<any>{
    return this.connectionService.getUrl('clients/all');
  }

  deleteUser(user_id:number):Promise<any>{
    return this.connectionService.deleteUrl('client/'+user_id);
  }

}
