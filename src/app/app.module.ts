import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosProvider } from '../providers/usuarios/usuarioProvider';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from '../pages/login/login';
import { VentasPage } from '../pages/ventas/ventas';
import { ProductoProvider } from '../providers/producto/producto';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UsuarioCrearPage } from '../pages/usuario-crear/usuario-crear';
import { IonicStorageModule } from '@ionic/storage';
import { VentaProvider } from '../providers/ventaProvider/ventaPeovider';
import { VentaDetallePage } from '../pages/venta-detalle/venta-detalle';
import { FacturaPage } from '../pages/factura/factura';
import { ClientesListarPage } from '../pages/clientes-listar/clientes-listar';
import { ClienteProvider } from '../providers/cliente/cliente';
import { ClientesCrearPage } from '../pages/clientes-crear/clientes-crear';
import { ClientesDetallesPage } from '../pages/clientes-detalles/clientes-detalles';
import { ClientesEditarPage } from '../pages/clientes-editar/clientes-editar';
import { SolicitudesPage } from '../pages/solicitudes/solicitudes';
import { CreditosPage } from '../pages/creditos/creditos';
import { SolicitudCrearPage } from '../pages/solicitud-crear/solicitud-crear';

import { IonicImageViewerModule } from 'ionic-img-viewer';

import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    VentasPage,
    UsuarioCrearPage,
    VentaDetallePage,
    FacturaPage,
    ClientesListarPage,
    ClientesCrearPage,
    ClientesDetallesPage,
    ClientesEditarPage,
    SolicitudesPage,
    CreditosPage,
    SolicitudCrearPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    IonicStorageModule.forRoot(),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    VentasPage,
    UsuarioCrearPage,
    VentaDetallePage,
    FacturaPage,
    ClientesListarPage,
    ClientesCrearPage,
    ClientesDetallesPage,
    ClientesEditarPage,
    SolicitudesPage,
    CreditosPage,
    SolicitudCrearPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosProvider,
    ProductoProvider,
    VentaProvider,
    ClienteProvider,
    Geolocation
    
  ]
})
export class AppModule {}
