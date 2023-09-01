# Select Box

## Single Select Box with static options

<single-static [form_control]="createForm?.get('singleStatic')" [error_message]="'Please select the colors'"
[options]="data" [options_display]="'color'" [options_value]="'value'" [required]="true"
[placeholder]="'Colors'" [searchPlaceHolder]="'Search Color'"></single-static>

## Single Select Box with API options

     <single-api [form_control]="createForm?.get('singleApi')" [error_message]="'Please select the User'"
                [options_display]="'name'" [options_value]="'id'" [required]="true" [placeholder]="'User'"
                [searchPlaceHolder]="'Search User'" [api_endpoint]="'https://jsonplaceholder.typicode.com/users'"
                [api_queryparams]="{_limit:200}" [api_params]="''" [response_key]="''"></single-api>

## Multiple Select Box with static options

<multiple-static [form_control]="createForm?.get('multipleStatic')" [need_all_options]="true"
[error_message]="'Please select the colors'" [options]="data" [options_display]="'color'"
[options_value]="'value'" [required]="true" [placeholder]="'Colors'"
[searchPlaceHolder]="'Search Color'"></multiple-static>

## Multiple Select Box with API options

            <multiple-api  [form_control]="createForm?.get('multipleApi')" [error_message]="'Please select the User'"
                [options_display]="'name'" [options_value]="'id'" [required]="true" [placeholder]="'User'"
                [searchPlaceHolder]="'Search User'" [need_all_options]="true" [api_endpoint]="'https://jsonplaceholder.typicode.com/users'"
                [api_queryparams]="{_limit:200}" [api_params]="''" [response_key]="''"></multiple-api>

# ALL in One Table

## Inputs from the Parent Component

## response

`Data from the API response` from the parent components as `Array`

## Columns

`This is an array ` that how columns it should have in the table . `Columns have certain properties as listed below`

1. `key` - Its the key for the `matColumnDef`
2. `label` - Its the header TH in the table
3. `sortKey` - If you need sorting mean then you should give value . If its empty sorting option will hidden.
4. `isLink` - it will shown as link in blue color and underlined
5. `routerLink` - you need to give the router link
6. `query` - its an array with {`key`:'String' , `value`:'String'} the keys must be given.
7. `params` - params will be given as string
8. `isLable` - label will be shown in the particular column
9. `isVert` - vert button will be shown
10. `conditionKey` - `idKey` are in which key the status and id contains

## (onPaginating)=$event

Pagination constants were emitted

## (onSorting) =$event

Sorting constants were emitted

## pageSize

current page Size is shown

## pageOptions

page number Options were shown

## needPagination

boolean

## status

status = [
{ status: '0', label: 'In-active', class: 'active' },
{ status: '1', label: 'Active', class: 'inactive' },
{ status: '2', label: 'Deleted', class: 'deleted' },
]

## buttonList

buttonList = [
{ name: 'View', condition: [0, 1, 2] },
{ name: 'Update', condition: [2] },
{ name: 'Delete', condition: [1, 2] },
{ name: 'Active', condition: [1] },
]

# Date Picker

# Input Properties

## 1. [placeholder] - 
`placeholder for the datepicker`

## 2. [form_control] 
- `Formcontrol name from the parent compoenent for the datepicker as [createForm?.get('simple')]`

## 3. [label] 
- `Label for the date picker from the parent component`

## 4. [required] 
- `whether the formcontrol is required or not its a boolean`

## 5. [labelPosition] 
- `label position for whether floating or fixed`

## 6. [first] 
- `it's for the whether its first date picker  as from date picker`

## 7. [label2] 
- `it's for the todate picker for error message purpose`

## 8. [minimum] 
- `Its for the minimum date`

## 9. [maximum] 
- `its for the maximum date`

## Date Picker Coding in the Parent Component

<div class="" style="margin-left: 50px;margin-top: 50px;">
    <date-picker-stable placeholder="DD-MM-YYYY" [typeable]="true" [form_control]="createForm?.get('simple')"
        [required]="true"  label="From Date" labelPosition="float"></date-picker-stable>
</div>

## From Date

<div class="" style="margin-left: 50px;margin-top: 50px;">
    <h2>From Date </h2>
    <date-picker-stable [typeable]="true" [form_control]="createForm?.get('fromDate')" [first]="true" [required]="true" label="From Date"
        label2="To date" labelPosition="float"></date-picker-stable>
</div>

## To Date

<div class="" style="margin-left: 50px;margin-top: 50px;">
    <h2>To Date</h2>
    <date-picker-stable [typeable]="true" [first]="false" [form_control]="createForm?.get('toDate')" [required]="true" label="To Date"
        label2="From Date" labelPosition="float"></date-picker-stable>
</div>
# Select Box

## Single Select Box with static options

<single-static [form_control]="createForm?.get('singleStatic')" [error_message]="'Please select the colors'"
[options]="data" [options_display]="'color'" [options_value]="'value'" [required]="true"
[placeholder]="'Colors'" [searchPlaceHolder]="'Search Color'"></single-static>

## Single Select Box with API options

     <single-api [form_control]="createForm?.get('singleApi')" [error_message]="'Please select the User'"
                [options_display]="'name'" [options_value]="'id'" [required]="true" [placeholder]="'User'"
                [searchPlaceHolder]="'Search User'" [api_endpoint]="'https://jsonplaceholder.typicode.com/users'"
                [api_queryparams]="{_limit:200}" [api_params]="''" [response_key]="''"></single-api>

## Multiple Select Box with static options

<multiple-static [form_control]="createForm?.get('multipleStatic')" [need_all_options]="true"
[error_message]="'Please select the colors'" [options]="data" [options_display]="'color'"
[options_value]="'value'" [required]="true" [placeholder]="'Colors'"
[searchPlaceHolder]="'Search Color'"></multiple-static>

## Multiple Select Box with API options

            <multiple-api  [form_control]="createForm?.get('multipleApi')" [error_message]="'Please select the User'"
                [options_display]="'name'" [options_value]="'id'" [required]="true" [placeholder]="'User'"
                [searchPlaceHolder]="'Search User'" [need_all_options]="true" [api_endpoint]="'https://jsonplaceholder.typicode.com/users'"
                [api_queryparams]="{_limit:200}" [api_params]="''" [response_key]="''"></multiple-api>

# ALL in One Table

## Inputs from the Parent Component

## response

`Data from the API response` from the parent components as `Array`

## Columns

`This is an array ` that how columns it should have in the table . `Columns have certain properties as listed below`

1. `key` - Its the key for the `matColumnDef`
2. `label` - Its the header TH in the table
3. `sortKey` - If you need sorting mean then you should give value . If its empty sorting option will hidden.
4. `isLink` - it will shown as link in blue color and underlined
5. `routerLink` - you need to give the router link
6. `query` - its an array with {`key`:'String' , `value`:'String'} the keys must be given.
7. `params` - params will be given as string
8. `isLable` - label will be shown in the particular column
9. `isVert` - vert button will be shown
10. `conditionKey` - `idKey` are in which key the status and id contains

## (onPaginating)=$event

Pagination constants were emitted

## (onSorting) =$event

Sorting constants were emitted

## pageSize

current page Size is shown

## pageOptions

page number Options were shown

## needPagination

boolean

## status

status = [
{ status: '0', label: 'In-active', class: 'active' },
{ status: '1', label: 'Active', class: 'inactive' },
{ status: '2', label: 'Deleted', class: 'deleted' },
]

## buttonList

buttonList = [
{ name: 'View', condition: [0, 1, 2] },
{ name: 'Update', condition: [2] },
{ name: 'Delete', condition: [1, 2] },
{ name: 'Active', condition: [1] },
]

# Date Picker

# Input Properties

## 1. [placeholder] - `placeholder for the datepicker`

## 2. [form_control] - `Formcontrol name from the parent compoenent for the datepicker as [createForm?.get('simple')]`

## 3. [label] - `Label for the date picker from the parent component`

## 4. [required] - `whether the formcontrol is required or not its a boolean`

## 5. [labelPosition] - `label position for whether floating or fixed`

## 6. [first] - `it's for the whether its first date picker  as from date picker`

## 7. [label2] - `it's for the todate picker for error message purpose`

## 8. [minimum] - `Its for the minimum date`

## 9. [maximum] - `its for the maximum date`

## Date Picker Coding in the Parent Component

<div class="" style="margin-left: 50px;margin-top: 50px;">
    <date-picker-stable placeholder="DD-MM-YYYY" [typeable]="true" [form_control]="createForm?.get('simple')"
        [required]="true"  label="From Date" labelPosition="float"></date-picker-stable>
</div>

## From Date

<div class="" style="margin-left: 50px;margin-top: 50px;">
    <h2>From Date </h2>
    <date-picker-stable [typeable]="true" [form_control]="createForm?.get('fromDate')" [first]="true" [required]="true" label="From Date"
        label2="To date" labelPosition="float"></date-picker-stable>
</div>

## To Date

<div class="" style="margin-left: 50px;margin-top: 50px;">
    <h2>To Date</h2>
    <date-picker-stable [typeable]="true" [first]="false" [form_control]="createForm?.get('toDate')" [required]="true" label="To Date"
        label2="From Date" labelPosition="float"></date-picker-stable>
</div>
