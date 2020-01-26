/**
 *  This is generated file. Do not edit !!
 *
 *  @formatter:off
 *
 */
/* tslint:disable */
export const TodoRule = 'class=Todo {   field=id {     label: "Id";   }    field=title {     label: "Title";     trait: required;   }    field=text {     trait:longtext;   }    field=urgency editable=false {     label: "Urgency";     component: TodoUrgentComponent;     bindings: {       priority: $value;     };   }    field=createdAt {     label: "Created at";   }    field=createdAt operation=create {     required: true;   }    field=isDone {     label: "Is done?";   }    zNone => *;   zLeft => title => text => urgency => createdAt => isDone;    @action=Save  {     label: "Save";     actionResults: ${alert("Record saved : " + object.title)};     visible: ${properties.get("editing")};     buttonStyle: info;   }    @action=Discard  {       label: "Discard Changes";       actionResults:${ alert("All cleared !") };       visible: ${properties.get("editing")};       buttonStyle:info;    } }  /*   Sample definition for operations edit and create  */ class=Todo {    operation=(edit, create) {       zNone => *;       zLeft => title => text => urgency => isDone;    }    operation=(create) {       zNone => *;       zLeft => title => text => createdAt;    }  } ';
/* tslint:disable */
/**
 *  @formatter:on
 *
 */
 