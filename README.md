# payment Gateway
These is node code of payment Gatway.

##### Manage Customer : 
Manage Customer using manage customer -> CustomerKey, Vendor Fields

##### Manage StoreCard :
Store the the Card Info with ManageCreditCardInfo -> CcInfoKey,Vendor

##### Manage Contract :
Create Conract with ManageContract 
use the CcInfoKey value in the PaymentInfoKey field.
For ManageContract follow the above process.



##### For API you have to use like follow :
NOTE : Use POST method to call API.

###### Basic information :

API url : http://paymentgate.herokuapp.com/charge

###### POST Data : 
Follow Object format pass in post data.
```sh
{
TransType:Sale
NameOnCard:John Doe
CardNum:4111111111111111
ExpDate:1233
CVNum:123
InvNum:1479277051913
Zip:29483
City:Summerville
State:SC
Street:Test 1234 Main Street
Country:US
shippingZip:
shippingCity:
shippingState:
shippingStreet:
shippingCountry:
MagData:
PNRef:
Amount:10.00
TipAmt:0.00
TaxAmt:0.00
SureChargeAmt:0.00
CashBackAmt:0.00
ExtData:<force>T</force>
RegisterNum:
Email:test@email.com
cartItem:
paycertifyTransaction:1
}
```
###### Response :
Follow object format in response for every API call.
> {"params":{"TransType":"Sale","NameOnCard":"John Doe","CardNum":"4111111111111111","ExpDate":"1233","CVNum":"123","InvNum":"1479277051913","Zip":"29483","City":"Summerville","State":"SC","Street":"Test 1234 Main Street","Country":"US","shippingZip":"","shippingCity":"","shippingState":"","shippingStreet":"","shippingCountry":"","MagData":"","PNRef":"","Amount":"10.00","TipAmt":"0.00","TaxAmt":"0.00","SureChargeAmt":"0.00","CashBackAmt":"0.00","ExtData":"<force>T</force>","RegisterNum":"","Email":"test@email.com","cartItem":"","paycertifyTransaction":"1","apitoken":"7E35FC46-C951-2D2F-FB42-7795F3D24C60"},"success":1,"error":"","response":{"Result":["0"],"RespMSG":["Approved"],"Message":["APPROVED"],"PNRef":["1c390452-c4ab-e611-a820-00505692354f"],"PaymentType":["VISA"],"TransType":["Sale"],"Amount":["10"],"Account":["411111******1111"],"AuthCode":["4E4DEB"],"payCertifyTransactionId":["582bf9f08c18fd1164829e11"],"ThreeDSecureStatus":["N"],"TransDate":["11162016"],"TransTime":["011720"]}}


##### APIs for Request :

###### Manage Customer: 
http://paymentgate.herokuapp.com/ManageCustomer

###### Manage StoreCard :
http://paymentgate.herokuapp.com/StoreCard

###### Process StoreCard:
http://paymentgate.herokuapp.com/ProcessStoredCard

###### Manage Contract:
http://paymentgate.herokuapp.com/ManageContract

