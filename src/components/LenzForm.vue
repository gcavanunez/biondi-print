<template>
  <div>
    <img src="/src/assets/logo.svg" style="width: 70%" />
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
        v-model="textareaProducts"
        v-autogrow
      ></textarea>
      <!-- @focus="resize"
        @input="resize" -->
    </form>
    <div></div>
    <p></p>
    <p></p>
    <div class="centering">
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
                v-model="inputTotal"
              />
            </td>
            <td align="center" width="100px">
              <strong style="text-align: center !important">PAQUETE(S)</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p></p>
    <div class="centering">
      <table width="100%" border="0" cellpadding="0">
        <tbody>
          <tr>
            <td width="50%" class="left"><strong>MEDIO DE PAGO</strong></td>
            <td align="right">
              <select name="OS" v-model="selectPaymentMethod">
                <option value="banco">BANCO</option>
                <option value="pos">POS</option>
                <option value="yape">YAPE</option>
                <option value="web">WEB</option>
                <option value="mercado_pago">MERC. PAGO</option>
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
              <select name="OS3" v-model="selectContactMethod">
                <option value="facebook">FACEBOOK</option>
                <option value="instagram">INSTAGRAM</option>
                <option value="web">WEB</option>
                <option value="whatsapp">WHATSAPP</option>
                <option value="mercado_pago">MER. LIBRE</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p></p>
    <div>
      <label><strong>Persona de contacto:</strong></label>
      <br />
      <input
        type="text"
        class="autosize"
        style="height: 27px"
        v-model="inputContact"
      />
    </div>
    <div>
      <label
        ><strong
          ><br />
          Teléfono:</strong
        ></label
      >
      <br />
      <input
        type="text"
        class="autosize"
        style="height: 27px"
        v-model="inputPhone"
      />
    </div>
    <div>
      <label class="all"
        ><strong
          ><br />
          Dirección:</strong
        ></label
      >
      <br />
      <textarea
        class="autosize"
        rows="1"
        style="height: 27px"
        v-model="inputAddress"
        v-autogrow
      ></textarea>
    </div>
    <div>
      <label for="productods">
        <strong>
          <br />
          Referencia:
        </strong>
      </label>
      <br />
      <textarea
        class="autosize"
        rows="1"
        style="height: 27px"
        v-model="inputReference"
        v-autogrow
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
    },
    products: {
      type: String,
    },
    paymentMethod: {
      type: String,
    },
    contactMethod: {
      type: String,
    },
    contact: {
      type: String,
    },
    phone: {
      type: [String, Number],
    },
    address: {
      type: [String, Number],
    },
    reference: {
      type: [String, Number],
    },
    total: {
      type: [String, Number],
    },
  },
  computed: {
    textareaProducts: {
      get() {
        return this.products;
      },
      set(v) {
        this.$emit("update:products", v);
      },
    },
    inputTotal: {
      get() {
        return this.total;
      },
      set(v) {
        this.$emit("update:total", v);
      },
    },
    selectPaymentMethod: {
      get() {
        return this.paymentMethod;
      },
      set(v) {
        this.$emit("update:paymentMethod", v);
      },
    },
    selectContactMethod: {
      get() {
        return this.contactMethod;
      },
      set(v) {
        this.$emit("update:contactMethod", v);
      },
    },
    inputContact: {
      get() {
        return this.contact;
      },
      set(v) {
        this.$emit("update:contact", v);
      },
    },
    inputPhone: {
      get() {
        return this.phone;
      },
      set(v) {
        this.$emit("update:phone", v);
      },
    },
    inputAddress: {
      get() {
        return this.address;
      },
      set(v) {
        this.$emit("update:address", v);
      },
    },
    inputReference: {
      get() {
        return this.reference;
      },
      set(v) {
        this.$emit("update:reference", v);
      },
    },
  },
  methods: {
    resize() {
      const { textarea } = this.$refs;
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    },
  },
};
</script>

