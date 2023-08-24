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

<!--     { key: 'name', label: 'Name', sortKey: 'name' },
    {
      key: 'email', label: 'Email Address', isLink: true, routerLink: 'select-box',
      query: [{ key: 'id', value: 'id' }, { key: 'nameURL', value: 'name' }]
    },
    { key: 'phone', label: 'Mobile Number' },
    { key: 'website', label: 'website' },
    { key: 'status', label: 'Status', isLabel: true },
    { key: 'actions', label: 'Actions', isVert: true, conditionKey: 'status', idKey: 'id' } -->

<!-- <mat-table-custom [response]="data" [columns]="columns" (onPaginating)="paginate($event)" (onSorting)="sort($event)"
[pageSize]="pageSize" [pageOptions]="[5,10,15,20,25,]" [needPagination]="true" [status]="status"
[buttonList]="buttonList"></mat-table-custom> -->
