## Single Select Static

<single-static-stable [form_control]="createForm?.get('singleStatic')" [error_message]="'Please select the colors'"
[options]="data" [options_display]="'color'" [options_value]="'value'" [required]="true"
[placeholder]="'Colors'" [searchPlaceHolder]="'Search Color'"></single-static-stable>

## Single Select API

<single-api-stable [form_control]="createForm?.get('singleApi')" [error_message]="'Please select the User'"
[options_display]="'name'" [options_value]="'id'" [required]="true" [placeholder]="'User'"
[searchPlaceHolder]="'Search User'" [api_endpoint]="'https://jsonplaceholder.typicode.com/users'"
[api_queryparams]="{\_limit:200}" [api_params]="''" [response_key]="''"></single-api-stable>

## Multiple Select Static

<multiple-static-stable [form_control]="createForm?.get('multipleStatic')" [need_all_options]="true"
[error_message]="'Please select the colors'" [options]="data" [options_display]="'color'"
[options_value]="'value'" [required]="true" [placeholder]="'Colors'"
[searchPlaceHolder]="'Search Color'"></multiple-static-stable>

## Multiple Select API

<multiple-api [form_control]="createForm?.get('multipleApi')" [error_message]="'Please select the User'"
[options_display]="'name'" [options_value]="'id'" [required]="true" [placeholder]="'User'"
[searchPlaceHolder]="'Search User'" [need_all_options]="true" [api_endpoint]="'https://jsonplaceholder.typicode.com/users'"
[api_queryparams]="{\_limit:200}" [api_params]="''" [response_key]="''"></multiple-api>
