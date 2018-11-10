import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Producto } from '../../models/producto.modelo';
import { ProductoProvider } from '../../providers/producto/producto';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VentaTipo } from '../../models/ventatipo.modelo';
import { Cliente } from '../../models/cliente.modeo';
import { Usuario } from '../../models/usuario.modelo';
import { UsuariosProvider } from '../../providers/usuarios/usuarioProvider';
import { VentaProvider } from '../../providers/ventaProvider/ventaPeovider';
import { Storage } from '@ionic/storage';
import { Venta } from '../../models/venta.modelo';
import { VentaDetallePage } from '../venta-detalle/venta-detalle';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { CreditoComprobar } from '../../models/credito.modelo';


@IonicPage()
@Component({
  selector: 'page-ventas',
  templateUrl: 'ventas.html',
})
export class VentasPage {

  searchQuery: string = '';
  items: string[];
  productos: Array<Producto> = [];
  ventaTipos: Array<VentaTipo> = [];
  clientes: Array<Cliente> = [];
  usuarios: Array<Usuario> = [];
  creditos: Array<CreditoComprobar> = [];
  creditoNuevo: CreditoComprobar = null;
  creditoNuevoVacio;
  ventaHecha: Venta = null;

  public idCliente = null;
  public tipoVenta = null;
  public creditoExiste: boolean = false;

  public usarioId: number;

  rows = [];

  tablestyle = 'bootstrap';
  formulario: FormGroup
  formCredito: FormGroup

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private productoProvider: ProductoProvider,
    private ventaProvider: VentaProvider,
    private fb: FormBuilder,
    public alertCtrl: AlertController,
    private storage: Storage,
    public clienteProvider: ClienteProvider,

  ) {

    this.initializeItems();

    this.formulario = this.fb.group({
      ventaTotal: 0,
      venta_tipo_id: '',
      cliente_id: '',
      usuario_id: ''
    });

    this.idUsuario();
    this.removerIdVenta();
  }

  idUsuario() {
    this.storage.get('id').then((val) => {
      this.usarioId = val;
    });
  }

  removerIdVenta() {
    this.storage.remove('venta_id');
  }

  obtenerIdVenta(key) {

  }
  crearCredito() {
    console.log('2');
  }

  crearVenta() {
    this.ventaHecha = this.formulario.value;

    this.idCliente = this.ventaHecha.cliente_id;



    this.ventaProvider.vender(this.formulario.value).subscribe(data => {
      this.ventaHecha = data;
      this.storage.set('id_venta', this.ventaHecha.id);

      this.storage.get('id_venta').then((val) => {

          this.creditoNuevoVacio = 
          '{\"clientel_id:\"' +this.ventaHecha.cliente_id +'\"venta_id: \"' + this.ventaHecha.id + '\"' +'}'
          console.log(this.creditoNuevoVacio);


        this.comprobarCredito(this.idCliente);
        this.navCtrl.setRoot(VentaDetallePage, {idVenta: val});

      });


    }, error => {
      console.log(error);
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VentasPage');
  }

  initializeItems() {
    this.listarTipoVenta();
    this.listarClientes();
  }

  listarP() {
    this.productoProvider.listarProductos().subscribe(data => {
      this.productos = data;
    }, error => {
      console.log(error);
    });
  }

  listarTipoVenta() {
    this.ventaProvider.listarTipoVenta().subscribe(data => {
      this.ventaTipos = data;
    }, error => {
      console.log(error);
    });
  }

  listarClientes() {
    this.clienteProvider.listarClientes().subscribe(data => {
      this.clientes = data;
    }, error => {
      console.log(error);
    });
  }

  comprobarCredito(id) {
    this.clienteProvider.comprobarCredito(id).subscribe(data => {
      this.creditos = data;
      var tamanio = this.creditos.length;
      console.log(tamanio);
      if (tamanio > 0) {
        console.log('actualizar crédito')
      } else {


        console.log('crear crédito')
      }
    }, error => {
      console.log(error);
    });
  }

}
