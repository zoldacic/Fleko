(function(){var i={Version:"7.0.4728.16930"};window.cfx.data=i;var c=window.cfx,b=window.sfx,f=function(){};i.RowHeadingSettings=f;f.Auto=0;f.DatesAsLabels=1;f.XValues=2;f.CompressedXValues=3;f._dt("CWDR",b.N,0);var e=function n(){n._ic()};e.prototype={};e.a=function(b){null==e.b&&e.d();return e.b.d(b)};e.f=function(c,j){return(new b.aQ)._01aQ(e.c(c),b.W.A(e).b(),j)};e.e=function(c,j){return e.f(c,j).b(b.aL.c(),!0,!0)};e.d=function(){null==e.b&&(e.b=e.e("StringTable",null))};e.c=function(c){c=b.W.A(e).c()+
"."+c;return b.b.u(c,"DataProviders","Data")};e._dt("CWDU",b.Sy,0);var g=function j(){j._ic();this.e=0};g.prototype={_0dN:function(b,a){this._bc._0bs.call(this,b,a);this.g=b;switch(this.g){case "Series":this.e=6;break;case "Point":this.e=7;break;case "Value":this.e=2;break;case "FromValue":this.e=5;break;case "Label":case "XValue":this.e=1}return this},P:function(c){switch(this.e){case 6:return c.f;case 7:return c.c;case 2:return c.n?null:c.u;case 5:return c.p?null:c.v;case 1:return c.m;default:throw(new b.P)._01P(b.b.j(null,
e.a("InvalidCrossTabField"),this.e));}}};g._dt("CWDC",c.bs,0);f=function a(){a._ic();this.b=null;this.u=this.v=0;this.l=this.q=this.h=this.a=null;this.z=0;this.p=!1;this.d=this.o=this.k=null;this.j=this.n=!1;this.m=this.t=null;this.c=0;this.r=null;this.g=0;this.i=this.w=null;this.f=0;this.e=!1;this.y=0;this._0CrosstabDataProvider()};i.CrosstabDataProvider=f;f.prototype={_0CrosstabDataProvider:function(){this.b=(new b.aL)._0aL("en-US");this.q=null;this.g=0;this.i=this.l=this.a=null;this.v=this.u=0;
this.r=this.m=null;this.f=this.c=-1;this.d=(new b.ab)._0ab();this.k=(new b.ab)._0ab();this.o=(new b.ab)._0ab();this.j=!1;this.t=e.a("Other");this.e=this.p=this.n=!1;return this},_01CrosstabDataProvider:function(a){this._0CrosstabDataProvider();this.setDataSource(a);return this},getCulture:function(){return this.b},setCulture:function(a){this.b=a=b.aL._t(a)},getDataSource:function(){this.D(this.h);return this.h},setDataSource:function(a){this.h=a;this.D(this.h)},getDateFormat:function(){return this.q},
setDateFormat:function(a){this.q=a},ibz:function(){return-1},ibC:function(){return-1},sibC:function(a){-1==a&&null!=this.a&&(this.a.sibC(-1),this.v=this.u=0,this.r=this.m=null,this.f=this.c=-1,this.k=(new b.ab)._0ab(),this.p=this.n=!1)},ibK:function(){return this.f},sibK:function(){throw(new b.P)._0P("Needs DataProviderFlags.RequiredDataSize in IDataProvider.Flags");},ibJ:function(){return this.c},sibJ:function(){throw(new b.P)._0P("Needs DataProviderFlags.RequiredDataSize in IDataProvider.Flags");
},ibI:function(){return!1},ibG:function(){return 0},sibG:function(){},ibB:function(){return 13},ibH:function(){return this.a},ibA:function(){if(null==this.a)return null;var a=null,d=null,c=null,k=null,h=null,f=null,g=a=null,g=(new b.aT)._01aT(256);g.sb(0);h=c=k=f=null;this.p=this.n=!1;for(var a=this.a.ibA(),i=this.a.ibD(),l=this.l.Sb();!0==l.SK();){var m=l.SM(),d=i.Q(m.b,!0);if(null!=d){var o=b.W.g(d.O()),d=d.P(a);switch(m.a){case 6:h=null!=d?d:b.K.t;break;case 7:this.j?null!=d&&(0!=g.b()&&null!=
this.i&&b.b.r(this.i,"")&&g.e(this.i),g.e(this.J(d,o))):f=d;break;case 2:c=d;break;case 5:k=d}}}if(0==g.b()){if(null==f)throw(new b.P)._01P(e.a("RowHeadingRequired"));if(f==b.K.t)throw(new b.P)._01P(e.a("NoNullValues"));}this.j?(a=g.toString(),this.A(a)):3==this.g?this.I(f,h):this.A(f);this.H(h);null==c||c==b.K.t?this.n=!0:this.u=this.B(this.y,c);this.e&&(null==k||k==b.K.t)?this.p=!0:this.v=this.B(this.z,k);return this},getNullColumnHeading:function(){return this.t},setNullColumnHeading:function(a){this.t=
a},getRowHeadingSettings:function(){return this.g},setRowHeadingSettings:function(a){this.g=a},getSeparator:function(){return this.i},setSeparator:function(a){this.i=a},x:function(){return!this.j&&(2==this.g||3==this.g||this.w==b.W.A(b.J)&&1!=this.g)?!0:!1},J:function(a,d){switch(d){case 18:return a.toString();case 9:return b.v._e(a,this.b);case 14:return b.E._j(a,this.b);case 7:return a.b(this.b);case 13:return b.D._f(a,this.b);case 6:return a.b(this.b);case 3:return a.c(this.b);case 16:return a._nc().r(this.q,
this.b);default:return a.toString()}},D:function(a){this.C(a,null)},C:function(a,b){null==a||null!=this.a||(this.a=c.DataSourceSettings.i(a,b))},B:function(a,d){switch(a){case 3:return d?1:0;case 6:return d;case 4:return d;case 16:return d._nc().p();case 15:return b.L.v(d);case 14:return d;case 7:return d;case 9:return d;case 11:return d;case 5:return d;case 13:return d;case 18:return b.E.i(d,this.b);case 8:return d;case 10:return d;case 12:return d;default:return 0}},A:function(a){this.k.D(a)?this.c=
this.k.G(a):(this.c=this.k.Se(),this.k.C(a,this.c));this.r=a.toString();this.m=a},I:function(a,b){if(this.o.D(b)){var c=this.o.G(b);this.c=++c;this.o.sG(b,c)}else this.o.C(b,0),this.c=0;this.r=a.toString();this.m=a},H:function(a){this.d.D(a)?this.f=this.d.G(a):(this.f=this.d.Se(),this.d.C(a,this.f))},ibE:function(){if(null==this.a)return!1;try{return this.a.ibE()}catch(a){return!1}},ibD:function(){var a=Array(this.e?5:4);a[0]=(new g)._0dN("Series",b.W.A(b.v));a[1]=(new g)._0dN("Point",b.W.A(b.v));
a[2]=(new g)._0dN("Value",b.W.A(b.E));a[3]=(new g)._0dN(this.x()?"XValue":"Label",this.j?b.W.A(b.b):this.w);this.e&&(a[4]=(new g)._0dN("FromValue",b.W.A(b.E)));return(new b.ah)._0ah(a)},ibM:function(){for(var a=Array(this.d.Se()),d=0,c=this.d.B().Sb();!0==c.SK();){var e=c.SM(),d=this.d.G(e);a[d]=(new g)._0dN(e!=b.K.t?e.toString():this.t,b.W.A(b.b))}this.d=(new b.ab)._0ab();return(new b.ah)._0ah(a)},ibL:function(a){this.C(this.h,a);return this.h},ibO:function(a){this.l=a;if(c.cz.e(this.l)||null==this.a||
null==this.h)return null;this.G();a=(new c.cz)._0cz();a.add((new c.FieldMap)._01FieldMap("Series",6));a.add((new c.FieldMap)._01FieldMap("Point",7));a.add((new c.FieldMap)._01FieldMap("Value",2));this.x()?a.add((new c.FieldMap)._01FieldMap("XValue",3)):a.add((new c.FieldMap)._01FieldMap("Label",1));this.e&&a.add((new c.FieldMap)._01FieldMap("FromValue",5));return a},ibN:function(a){this.setDataSource(a)},G:function(){null==this.q&&this.b.d().b();this.F();for(var a=!1,c=this.a.ibD(),e=this.l.Sb();!0==
e.SK();){var f=e.SM(),g=c.Q(f.b,!0);if(null!=g){var i=b.W.g(g.O());switch(f.a){case 7:a?this.j=!0:(this.w=g.O(),a=!0);break;case 2:this.y=i;break;case 5:this.z=i}}}},F:function(){for(var a=!1,c=!1,f=!1,g=this.l.Sb();!0==g.SK();){var h=g.SM();7==h.a?a=!0:6==h.a?c=!0:2==h.a?f=!0:5==h.a&&(this.e=!0)}if(!a)throw(new b.P)._01P(e.a("RowHeadingNotFound"));if(!c)throw(new b.P)._01P(e.a("ColumnHeadingNotFound"));if(!f)throw(new b.P)._01P(e.a("ValueHeadingNotFound"));}};f._dt("CWDC",b.Sy,0,c.ibF,c.iby)})();