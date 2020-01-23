/**
 *  This is generated file. Do not edit !!
 *
 *  @formatter:off
 *
 */
/* tslint:disable */
export const TodoRule = '/*     User rules.oss -- Meta-data rules. Generated file      Default definition */ class=Todo {      field=id {            label:"Id";        }         field=title {            label:"Title";        }         field=text {            trait:longtext;        }         field=createdAt {            label:"Created at";        }         field=isDone {            label:"Is done?";        }         zNone => *;        zLeft => title => text => createdAt => isDone; }  /*   Sample definition for operations edit and create  */ class=Todo {    operation=(edit, create) {       zNone => *;       zLeft => title => text => isDone;    }    operation=(create) {       zNone => *;       zLeft => title => text;    }  } ';
/* tslint:disable */
/**
 *  @formatter:on
 *
 */
 