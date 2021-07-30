<template>
  <div>
    <div class="ticket">
      <div>
        <img src="http://entrega.lenz.pe/logo.svg" style="width: 70%" />
        <h2>ÓRDEN DE ENTREGA</h2>
        {{ date }}
        <form>
          <div>
            <label for="productos"
              ><strong
                ><br />
                PRODUCTOS:</strong
              ></label
            >
            <br />
          </div>
          <textarea
            class="autosize"
            rows="1"
            style="height: 27px"
            v-model="productos"
          ></textarea>
        </form>
        <div></div>
        <p></p>
        <p></p>
        <center>
          <table width="200px" border="0" cellpadding="0">
            <tbody>
              <tr>
                <td align="center" class="left">
                  <strong style="text-align: center !important">TOTAL</strong>
                </td>
                <td align="center">
                  <input
                    type="number"
                    style="
                      width: 50px;
                      margin-left: 5px;
                      margin-right: 5px;
                      text-align: center;
                    "
                  />
                </td>
                <td align="center" width="100px">
                  <strong style="text-align: center !important"
                    >PAQUETE(S)</strong
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </center>
        <p></p>
        <center>
          <table width="100%" border="0" cellpadding="0">
            <tbody>
              <tr>
                <td width="50%" class="left"><strong>MEDIO DE PAGO</strong></td>
                <td align="right">
                  <select name="OS" v-model="payment_method">
                    <option value="2">BANCO</option>
                    <option value="3">POS</option>
                    <option value="4">YAPE</option>
                    <option value="5">WEB</option>
                    <option value="6">MERC. PAGO</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="left"><strong>ESTADO DEL PAGO</strong></td>
                <td align="right">
                  <select name="OS2">
                    <option value="2">PAGADO</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="left"><strong>MEDIO DE CONTACTO</strong></td>
                <td align="right">
                  <select name="OS3">
                    <option value="1">FACEBOOK</option>
                    <option value="2">INSTAGRAM</option>
                    <option value="3">WEB</option>
                    <option value="4">WHATSAPP</option>
                    <option value="5">MER. LIBRE</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
        <p></p>
        <div>
          <label for="name"><strong>Persona de contacto:</strong></label>
          <br />
          <input
            type="text"
            id="name"
            class="autosize"
            rows="1"
            style="height: 17px"
          />
        </div>
        <div>
          <label for="name"
            ><strong
              ><br />
              Teléfono:</strong
            ></label
          >
          <br />
          <input
            type="text"
            id="name"
            class="autosize"
            rows="1"
            style="height: 17px"
          />
        </div>
        <div>
          <label for="productos" class="all"
            ><strong
              ><br />
              Dirección:</strong
            ></label
          >
          <br />
          <textarea
            id="productos"
            class="autosize"
            rows="1"
            style="height: 27px"
          ></textarea>
        </div>
        <div>
          <label for="productods"
            ><strong
              ><br />
              Referencia:</strong
            ></label
          >
          <br />
          <textarea class="autosize" rows="1" style="height: 27px"></textarea>
        </div>
      </div>
      <div class="print-only">
        <img src="http://entrega.lenz.pe/logo.svg" style="width: 70%" />
        <h2>ÓRDEN DE ENTREGA</h2>
        {{ date }}
        <form>
          <div>
            <label for="productos"
              ><strong
                ><br />
                PRODUCTOS:</strong
              ></label
            >
            <br />
          </div>
          <textarea
            class="autosize"
            rows="1"
            style="height: 27px"
            v-model="productos"
          ></textarea>
        </form>
        <div></div>
        <p></p>
        <p></p>
        <center>
          <table width="200px" border="0" cellpadding="0">
            <tbody>
              <tr>
                <td align="center" class="left">
                  <strong style="text-align: center !important">TOTAL</strong>
                </td>
                <td align="center">
                  <input
                    type="number"
                    style="
                      width: 50px;
                      margin-left: 5px;
                      margin-right: 5px;
                      text-align: center;
                    "
                  />
                </td>
                <td align="center" width="100px">
                  <strong style="text-align: center !important"
                    >PAQUETE(S)</strong
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </center>
        <p></p>
        <center>
          <table width="100%" border="0" cellpadding="0">
            <tbody>
              <tr>
                <td width="50%" class="left"><strong>MEDIO DE PAGO</strong></td>
                <td align="right">
                  <select name="OS" v-model="payment_method">
                    <option value="2">BANCO</option>
                    <option value="3">POS</option>
                    <option value="4">YAPE</option>
                    <option value="5">WEB</option>
                    <option value="6">MERC. PAGO</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="left"><strong>ESTADO DEL PAGO</strong></td>
                <td align="right">
                  <select name="OS2">
                    <option value="2">PAGADO</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="left"><strong>MEDIO DE CONTACTO</strong></td>
                <td align="right">
                  <select name="OS3">
                    <option value="1">FACEBOOK</option>
                    <option value="2">INSTAGRAM</option>
                    <option value="3">WEB</option>
                    <option value="4">WHATSAPP</option>
                    <option value="5">MER. LIBRE</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
        <p></p>
        <div>
          <label for="name"><strong>Persona de contacto:</strong></label>
          <br />
          <input
            type="text"
            id="name"
            class="autosize"
            rows="1"
            style="height: 17px"
          />
        </div>
        <div>
          <label for="name"
            ><strong
              ><br />
              Teléfono:</strong
            ></label
          >
          <br />
          <input
            type="text"
            id="name"
            class="autosize"
            rows="1"
            style="height: 17px"
          />
        </div>
        <div>
          <label for="productos" class="all"
            ><strong
              ><br />
              Dirección:</strong
            ></label
          >
          <br />
          <textarea
            id="productos"
            class="autosize"
            rows="1"
            style="height: 27px"
          ></textarea>
        </div>
        <div>
          <label for="productods"
            ><strong
              ><br />
              Referencia:</strong
            ></label
          >
          <br />
          <textarea class="autosize" rows="1" style="height: 27px"></textarea>
        </div>
      </div>

      <div class="print-only">
        <hr />
        <p style="color: #f7f7f7">CONFIRMACION DE ENTREGA</p>
        <br />
        <p>&nbsp;</p>
        <br />
        <p style="color: #f7f7f7">CONFIRMACION DE ENTREGA</p>
        <br />
        <p>&nbsp;</p>
        <br />
        <p style="color: #f7f7f7">CONFIRMACION DE ENTREGA</p>
        <br />
        <p>&nbsp;</p>
        <br />
        <p>CONFIRMACION DE ENTREGA</p>
        <br />
        <hr />
      </div>

      <!-- SALTO DE PAGINA PARA DOCUMENTOS ADICIONALES  -->

      <div class="saltopagina"></div>

      <div class="print-only">
        <hr />
        <p style="color: #f7f7f7">CONFIRMACION DE ENTREGA</p>
        <br />
        <p>&nbsp;</p>
        <br />
        <p style="color: #f7f7f7">CONFIRMACION DE ENTREGA</p>
        <br />
        <p>&nbsp;</p>
        <br />
        <p style="color: #f7f7f7">CONFIRMACION DE ENTREGA</p>
        <br />
        <p>&nbsp;</p>
        <br />
        <p>CONFIRMACION DE ENTREGA</p>
        <br />
        <hr />
      </div>

      <p>
        <input
          class="no-print"
          id="desaparece"
          type="button"
          @click="print()"
          value="Imprimir"
        />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      campo_1: "",
    },
    payment_method: "",
    productos: "",
  }),
  computed: {
    date() {
      const f = new Date();
      return f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    },
  },
  methods: {
    print() {
      console.log(this.form);
      // const Obj = document.getElementById("desaparece");
      window.print();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
