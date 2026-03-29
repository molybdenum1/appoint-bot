import { Keyboard } from "grammy";

const startKeyboard = new Keyboard()
  .text("Reg User")
  .row()
  .text("Show masters")
  .row()
  .text("Show services")
  .row();

const adminKeyboard = new Keyboard()
  .text("Add master")
  .row()
  .text("Show master")
  .row()
  .text("Remove master")
  .row()
  .text("Add service")
  .row()
  .text("Show service")
  .row()
  .text("Remove service")
  .row()
  .text("Find Users")
  .row()
  .text("Add user")
  .row()
  .text("Show user")
  .row()
  .text("Remove user")
  .row();

const masterKeyboard = new Keyboard()
  .text("Add service")
  .row()
  .text("Show appointments")
  .row()
  .text("Add appointments")
  .row();

export { adminKeyboard, masterKeyboard, startKeyboard };
