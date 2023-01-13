import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
var expressLayouts = require('express-ejs-layouts');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // ! EJS
  app.useStaticAssets(join(__dirname, '..', 'views', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.set("view engine", "ejs");

  // ! EXPRESS_LAYOUTS
  app.set("layout",  './layout/layouts.ejs');
  app.use(expressLayouts);
  app.set("layout extractScripts", true)

  await app.listen(3000);
}
bootstrap();