<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="学生姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="学校">
        <el-select v-model="form.school" placeholder="请选择学校">
          <el-option label="黑大" value="heida"></el-option>
          <el-option label="理工" value="ligong"></el-option>
          <el-option label="林大" value="linda"></el-option>
          <el-option label="农大" value="nongda"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="入学时间">
        <el-col :span="9">
          <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="0">男</el-radio>
          <el-radio label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注信息">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { addStudent } from '@/api/student'
export default {
  data() {
    return {
      form: {
        name: "",
        school: "",
        date: "",
        sex: "1",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      addStudent(this.form).then((res)=>{
        console.log(res);
      })
    }
  }
};
</script>
<style scoped>
  .app-container{
    width: 50%;
  }
</style>