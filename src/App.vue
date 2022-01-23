<template>
  <div>
    <div class="ticket shadow relative">
      <div>
        <LenzForm
          :date="date"
          v-model:products="form.products"
          v-model:total="form.total"
          v-model:paymentMethod="form.paymentMethod"
          v-model:contactMethod="form.contactMethod"
          v-model:contact="form.contact"
          v-model:amountProducts="form.amountProducts"
          v-model:amountShipping="form.amountShipping"
          v-model:paymentStatus="form.paymentStatus"
          v-model:phone="form.phone"
          v-model:address="form.address"
          v-model:district="form.district"
          v-model:reference="form.reference"
        />
      </div>
      <!-- <div class="saltopagina"></div> -->
      <div class="print-only">
        <img
          src="/src/assets/paid.png"
          style="width: 400px"
          v-if="form.paymentStatus == 'pagado'"
        />
        <img
          src="/src/assets/pending_partial.png"
          style="width: 400px"
          v-if="['pendiente', 'parcial'].includes(form.paymentStatus)"
        />
        <!-- <hr />
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
        <hr /> -->
      </div>
      <div class="saltopagina"></div>
      <!-- <div class="print-only"> -->
      <div class="visible-only">
        <LenzForm
          :date="date"
          v-model:products="form.products"
          v-model:total="form.total"
          v-model:paymentMethod="form.paymentMethod"
          v-model:amountProducts="form.amountProducts"
          v-model:amountShipping="form.amountShipping"
          v-model:paymentStatus="form.paymentStatus"
          v-model:contactMethod="form.contactMethod"
          v-model:contact="form.contact"
          v-model:phone="form.phone"
          v-model:address="form.address"
          v-model:district="form.district"
          v-model:reference="form.reference"
        />
      </div>
      <!-- <div class="print-only">
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
      </div> -->
      <!-- SALTO DE PAGINA PARA DOCUMENTOS ADICIONALES  -->

      <div class="saltopagina" v-if="form.paymentStatus == 'pendiente'"></div>
      <div class="print-only" v-if="form.paymentStatus == 'pendiente'">
        <img src="/src/assets/pago.png" style="width: 400px" />
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
import LenzForm from "./components/LenzForm.vue";
export default {
  components: {
    LenzForm,
  },
  data: () => ({
    form: {
      products: "",
      total: 1,
      amountProducts: "",
      amountShipping: "",
      paymentMethod: "banco",
      paymentStatus: "pendiente",
      contactMethod: "facebook",
      contact: "",
      phone: "",
      address: "",
      reference: "",
      district: "",
    },
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

