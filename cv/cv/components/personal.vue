<template>
    <div class="flex-container">
        <dl>
            <dt>NIF</dt>
            <dd class="cr">{{ NIF }}</dd>
            <dt>Birthdate</dt>
            <dd>{{ BIRTHDATE }}</dd>
        </dl>
        <dl>
            <dt>Address</dt>
            <dd>
              <div v-for="line in ADRESS">{{ line }}</div>
            </dd>
        </dl>
        <dl>
            <dt>Contact</dt>
            <dd>
              <div v-for="contacts in CONTACT"> {{ contacts }}</div>
            </dd>
        </dl>
    </div>
</template>

<style scoped>
  .flex-container {
    padding: 1.5em 0;
    border: 1px solid rgba(0,35,0,.4);
    border-left: none;
    border-right: none;
    display: flex;
    justify-content: space-between;
  }

  dl {
    display: inline-block;
  }

  dt,
  dd {
    float: left;
    line-height: 1;
  }

  dt {
    font-style: italic;
    text-align: right;
    padding-right: 3%;
    width: 200px;
    max-width: 30%;
  }

  dd {
    max-width: 63%;
    border-left: 1px solid currentColor;
    padding-left: 3%;
  }

  .cr + * {
    clear: left;
  }
</style>

<script>
  export default {
    name: 'personal',
    data () {
      return {
        NIF: '29133034 - S',
        BIRTHDATE: 'October 24th 1986',
        ADRESS: [
          'C/ San Lorenzo, 47',
          '1D, 50007',
          'Saragossa, Spain'
        ],
        CONTACT: [
          'paulmelero@gmail.com',
          '687 62 62 37',
          '@pollobrav0'
        ]
      }
    }
  }
</script>
