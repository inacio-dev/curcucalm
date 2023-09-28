'use client'

import React, { ReactNode } from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import * as Dialog from '@radix-ui/react-dialog'

type TermsDialogProps = {
  children: ReactNode
}

export default function TermsDialog(props: TermsDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{props.children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-slate-dark-4/40" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] overflow-hidden overflow-y-auto rounded-[6px] bg-slate-light-3 p-[25px] text-slate-dark-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 mb-6 text-3xl font-bold">
            Políticas de Privacidade e Termos de Uso
          </Dialog.Title>

          <div className="mx-auto max-w-6xl p-6">
            <p className="mb-6">
              A equipe do Curcucalm criou esse Termo de uso a fim de demonstrar o nosso firme
              comprometimento sobre como você pode utilizar todas as informações deste Site.
            </p>

            <p className="mb-6">
              Este site trata-se de um serviço interativo oferecido em por meio de página eletrônica
              na internet que oferece informações sobre saúde e alimentação a partir da integração
              de diversas fontes de informações confiáveis, que estão alinhadas a opinião do autor.
            </p>

            <p className="mb-6">
              O acesso a este site representa a aceitação expressa e irrestrita dos termos de uso
              abaixo descritos. Se você não concorda com os termos, por favor, não acesse nem
              utilize este website.
            </p>

            <p className="mb-6">
              O visitante poderá usar este site apenas para finalidades lícitas. Este espaço não
              poderá ser utilizado para publicar, enviar, distribuir ou divulgar conteúdos, ou
              informação de caráter difamatório, obsceno ou ilícito, inclusive informações de
              propriedade exclusiva pertencentes a outras pessoas ou empresas, bem como marcas
              registradas ou informações protegidas por direitos autorais, sem a expressa
              autorização do detentor desses direitos. Ainda, o visitante não poderá usar este site
              para obter ou divulgar informações pessoais, inclusive endereços na Internet, sobre os
              usuários do site.
            </p>

            <p className="mb-6">
              A equipe deste site empenha-se em manter a qualidade, atualidade e autenticidade das
              informações do site, mas seus criadores e colaboradores não se responsabilizam por
              eventuais falhas nos serviços ou inexatidão das informações oferecidas.
            </p>

            <p className="mb-6">
              O usuário não deve ter como pressuposto que tais serviços e informações são isentos de
              erros ou serão adequados aos seus objetivos particulares. Os criadores e colaboradores
              tampouco assumem o compromisso de atualizar as informações, e reservam-se o direito de
              alterar as condições de uso ou preços dos serviços e produtos oferecidos no site a
              qualquer momento.
            </p>

            <p className="mb-6">
              O acesso a este site é gratuito. Este site poderá criar áreas de acesso exclusivo aos
              seus clientes ou para terceiros especialmente autorizados.
            </p>

            <p className="mb-6">
              Os criadores e colaboradores deste site poderão a seu exclusivo critério e em qualquer
              tempo, modificar ou desativar o site, bem como limitar, cancelar ou suspender seu uso,
              ou o acesso. Também estes Termos de Uso poderão ser alterados a qualquer tempo. Visite
              regularmente esta página e consulte os Termos então vigentes. Algumas disposições
              destes Termos podem ser substituídas por termos ou avisos legais expressos localizados
              em determinadas páginas deste site.
            </p>

            <p className="mb-6">
              Informações enviadas pelos usuários e colaboradores Qualquer material, informação,
              artigos ou outras comunicações que forem transmitidas, enviadas ou publicadas neste
              site serão considerados informação não confidencial, e qualquer violação aos direitos
              dos seus criadores não será de responsabilidade da equipe deste site. É
              terminantemente proibido transmitir, trocar ou publicar, através deste website,
              qualquer material de cunho obsceno, difamatório ou ilegal, bem como textos ou criações
              de terceiros sem a autorização do autor. A equipe deste site reserva-se o direito de
              restringir o acesso às informações enviadas por terceiros aos seus usuários.
            </p>

            <p className="mb-6">
              Este site poderá, mas não é obrigado, a monitorar, revistar e restringir o acesso a
              qualquer área no site onde usuários transmitem e trocam informações entre si,
              incluindo, mas não limitado a, salas de chat, centro de mensagens ou outros fóruns de
              debates. Podendo retirar do ar ou retirar o acesso a qualquer destas informações, ou
              comunicações. Porém, a equipe deste site não é responsável pelo conteúdo de qualquer
              uma das informações trocadas entre os usuários, sejam elas lícitas ou ilícitas.
            </p>

            <p className="mb-6">
              Limitação da Responsabilidade Os materiais são fornecidos neste website sem nenhuma
              garantia explícita ou implícita de comercialização, ou adequação a qualquer objetivo
              específico. Em nenhum caso este site ou os seus colaboradores serão responsabilizados
              por quaisquer danos, incluindo lucros cessantes, interrupção de negócio, ou perda de
              informação que resultem do uso ou da incapacidade de usar os materiais. A equipe deste
              site não garante a precisão ou integridade das informações, textos, gráficos, links e
              outros itens dos materiais.
            </p>

            <p className="mb-6">
              A equipe deste site não é responsável pela violação de direitos autorais decorrente de
              informações, documentos e materiais publicados neste website, comprometendo-se a
              retirá-los do ar assim que notificado da infração.
            </p>

            <p className="mb-6">
              Erros e falhas Os documentos, informações, imagens e gráficos publicados neste site
              podem conter imprecisões técnicas ou erros tipográficos. Em nenhuma hipótese a equipe
              deste site e/ou seus respectivos fornecedores serão responsáveis por qualquer dano
              direto ou indireto decorrente da impossibilidade de uso, perda de dados ou lucros,
              resultante do acesso e desempenho do site, dos serviços oferecidos ou de informações
              disponíveis neste site. O acesso aos serviços, materiais, informações e facilidades
              contidas neste website não garante a sua qualidade.
            </p>

            <p className="mb-6">
              Links para sites de terceiros Os sites apontados não estão sob o controle deste site
              que não é responsável pelo conteúdo de qualquer outro website indicado ou acessado por
              meio deste site reserva-se o direito de eliminar qualquer link ou direcionamento a
              outros sites, ou serviços a qualquer momento. Este site não endossa firmas ou produtos
              indicados, acessados ou divulgados através deste website, tampouco pelos anúncios aqui
              publicados, reservando-se o direito de publicar este alerta em suas páginas
              eletrônicas sempre que considerar necessário.
            </p>

            <p className="mb-6">
              Direitos autorais e propriedade intelectual Os documentos, conteúdos e criações
              contidos neste website pertencem aos seus criadores e colaboradores. A autoria dos
              conteúdo, material e imagens exibidos no diabetescontrolada.com.br é protegida por
              leis nacionais e internacionais. Não podem ser copiados, reproduzidos, modificados,
              publicados, atualizados, postados, transmitidos ou distribuídos de qualquer maneira
              sem autorização prévia e por escrito do proprietário desse site.
            </p>

            <p className="mb-6">
              As imagens contidas neste website são aqui incorporadas apenas para fins de
              visualização, e, salvo autorização expressa por escrito, não podem ser gravadas ou
              baixadas via download. A reprodução ou armazenamento de materiais recuperados a partir
              deste serviço sujeitará os infratores às penas da lei.
            </p>

            <p className="mb-6">
              O nome deste site, seu logotipo, o nome de domínio para acesso na Internet, bem como
              todos os elementos característicos da tecnologia desenvolvida e aqui apresentada, sob
              a forma da articulação de bases de dados, constituem marcas registradas e propriedades
              intelectuais privadas e todos os direitos decorrentes de seu registro são assegurados
              por lei. Alguns direitos de uso podem ser cedidos pelo proprietário do site, em
              contrato ou licença especial, que pode ser cancelada a qualquer momento se não
              cumpridos os seus termos.
            </p>

            <p className="mb-6">
              As marcas registradas deste site só podem ser usadas publicamente com autorização
              expressa. O uso destas marcas registradas em publicidade e promoção de produtos deve
              ser adequadamente informado.
            </p>

            <p className="mb-6">
              Reclamações sobre violação de direitos autorais A equipe deste site respeita a
              propriedade intelectual de outras pessoas ou empresas e solicitamos aos nossos membros
              que façam o mesmo. Toda e qualquer violação de direitos autorais deverá ser notificada
              ao contato@curcucalmoficial.com e acompanhada dos documentos e informações que
              confirmam a autoria.
            </p>

            <p className="mb-6">
              Seu perfil pessoal Quando pedimos informações sobre você, o nosso principal interesse
              é oferecer serviços mais personalizados. Respeitamos a sua privacidade e não a
              vendemos, nem alugamos, tampouco compartilhamos seu nome e informações pessoais com
              outras organizações.
            </p>

            <p className="mb-6">
              Ao fornecer suas informações pessoais e foto, você compreende e consente à equipe
              deste site o uso da sua imagem, foto, vídeo e comentários.
            </p>

            <p className="mb-6">
              Essas informações estão disponíveis em seu perfil público e em nossa comunidade, onde
              você também verá as dos outros membros.
            </p>

            <p className="mb-6">
              Você tem a opção de negar o uso das suas informações ao atualizar suas escolhas em
              “Privacidade” — “Configurações de Conta”. De tempos em tempos, nós poderemos usar
              algumas informações de clientes em nossos materiais de marketing.
            </p>

            <p className="mb-6">
              Medidas de segurança A segurança de seus dados pessoais é importante para nós.
              Seguimos os padrões aceitos no ramo para proteger as suas informações pessoais que nos
              são enviadas tanto durante a transmissão de dados quanto após o recebimento deles.
            </p>

            <p className="mb-6">
              Quando você digita informações sigilosas (como seu cartão de crédito) em nossos
              formulários, elas são criptografadas para a transmissão, usando a tecnologia SSL
              (camada de sockets protegida).
            </p>

            <p className="mb-6">
              Se você descobrir uma cobrança fraudulenta em sua fatura, feita em nome da equipe
              deste site, por favor, contate-nos e reporte o caso imediatamente para a
              administradora do cartão conforme os procedimentos padrões deles. O site usa fóruns,
              murais e salas de bate-papo. Por favor, lembre-se de que qualquer informação que você
              expuser por esses meios se torna pública. Sempre tenha cautela com as informações
              pessoais que você fornece a qualquer pessoa nesses contextos.
            </p>

            <p className="mb-6">
              Também insistimos na verificação da senha ao fazer login, para que você e seus dados
              estejam protegidos contra acessos sem autorização. Se você parar de usar o computador
              por muito tempo sem encerrar a sua sessão na escola, ela será encerrada
              automaticamente após certo tempo.
            </p>

            <p className="mb-6">
              Apenas funcionários que precisem da informação para realizar certas tarefas (como
              cobrança ou atendimento ao aluno, por exemplo) têm acesso a informações pessoais. Os
              servidores nos quais armazenamos suas informações são mantidos em ambiente seguro.
            </p>

            <p className="mb-6">
              Apesar das práticas e procedimentos de segurança, como acontece com toda e qualquer
              rede de computadores na internet, a equipe deste site não pode garantir a segurança de
              seus dados pessoais ou de quaisquer outros dados passados pela internet e, portanto,
              não poderá ser responsabilizada por falhas de segurança.
            </p>

            <p className="mb-6">
              Nenhum método de transmissão de dados ou armazenamento eletrônico na internet é 100%
              seguro. Deste modo, não podemos garantir a segurança total de seus dados.
            </p>

            <p className="mb-6">
              Comunicados do site Para enviar a você as lições diárias (E-mail), precisamos de seu
              endereço de e-mail. Como assinante delas, você será adicionado em nossa lista para
              envio de e-mails eventuais com atualizações de serviços, ofertas especiais e promoções
              deste site.
            </p>

            <p className="mb-6">
              Você pode cancelar a sua inscrição ao receber os e-mails a qualquer momento. Basta
              clicar no link “Remover e-mail da lista” que aparece no rodapé do e-mail que enviamos.
              Enviaremos anúncios relacionados a serviços raramente, apenas quando for necessário.
            </p>

            <p className="mb-6">
              Por exemplo, se o nosso serviço for temporariamente suspenso para manutenção, é
              possível que enviemos um e-mail para avisá-lo. Em geral, não é possível optar por não
              receber este último tipo de comunicação por não serem e-mails promocionais. Se você
              não quer receber os e-mails de aviso, você pode solicitar o descadastramento.
            </p>

            <p className="mb-6">
              Proteção de informação de menores Estamos comprometidos a proteger a privacidade dos
              menores. Esse e todos nossos sites são voltados ao público e não são feitos para
              atrair crianças com menos de 13 anos.
            </p>

            <p className="mb-6">
              Não coletamos, nem solicitamos informações pessoais de menores de 13 anos, tampouco
              enviamos e-mails solicitando dados pessoais, a menos que tenhamos a permissão dos pais
              ou guardiões legais da criança. Inscrição e cadastro para assinatura deste site
              oferece cursos e produtos voltados para a área de saúde e bem-estar.
            </p>

            <p className="mb-6">
              Para fazer um desses cursos, aproveitar o período grátis ou tornar-se usuário de nossa
              comunidade, você precisa se tornar membro deste site. Durante a inscrição, coletamos
              informações como seu nome e e-mail.
            </p>

            <p className="mb-6">
              Também pedimos dados demográficos, como idade e sexo, para criarmos seu perfil. Você
              também pode ter de fornecer seu cartão de crédito, caso o serviço que pediu seja pago.
              Essa informação é criptografada em nosso servidor seguro.
            </p>

            <p className="mb-6">
              Como membro, você será adicionado à nossa base para receber e-mails eventuais com
              informações de serviços, ofertas especiais e promoções do Curcucalm.
            </p>

            <p className="mb-6">
              Web Beacons Usamos uma tecnologia chamada clear gifs (também conhecida como web
              beacons ou web bugs), que ajuda a gerenciar melhor o conteúdo do site, informando qual
              funciona melhor. Os clear gifs são pequenos gráficos com um identificador único, com a
              função similar aos cookies — são usados para rastrear os movimentos online de usuários
              da internet.
            </p>

            <p className="mb-6">
              Porém, ao contrário dos cookies, que ficam no computador do usuário, os clear gifs são
              incorporados na própria página e são do tamanho de um ponto. Não utilizamos os clear
              gifs que contêm informações pessoais de nossos clientes. Usamos clear gifs em nossos
              e-mails com formato HTML para sabermos quais são abertos pelos destinatários. Assim,
              podemos medir a eficácia de certas comunicações e de nossas campanhas. Em alguns
              e-mails, colocamos conteúdo com links para clicar e ser redirecionado para o site do
              Chave do Coração do Homem.
            </p>

            <p className="mb-6">
              Quando os usuários e/ou clientes clicam em um desses links, passam por um servidor à
              parte antes de chegar à página de destino. Rastreamos os dados de cliques para
              determinar o interesse por cada assunto e medirmos a eficiência de nossas comunicações
              com o aluno. Caso prefira não ser rastreado assim, não clique em links de texto ou
              imagens em seus e-mails.
            </p>

            <p className="mb-6">
              Com quem compartilhamos suas informações Compartilhamos seus dados pessoais com
              Curcucalm, para que as outras empresas do grupo possam oferecer produtos e serviços a
              você. Como As únicas informações que compartilhamos com o Curcucalm são seu nome,
              faixa etária, e-mail e país. Se não quiser que elas sejam compartilhadas, entre em
              contato com nosso atendimento pelo e-mail contato@curcucalmoficial.com.
            </p>

            <p className="mb-6">
              Podemos fornecer seus dados a empresas que prestem serviços e que nos ajudem em nossas
              atividades, como o processamento de pagamentos ou a oferta de atendimento. Essas
              empresas estão autorizadas a usar seus dados apenas se necessário para prestação de
              serviços a nós. Também podemos passar seus dados:
            </p>

            <ul className="mb-6 list-disc pl-8">
              <li>
                Conforme exigido por lei para atender a intimações ou processos legais similares;
              </li>
              <li>
                Quando acreditarmos, de boa-fé, que a quebra de sigilo é necessária para protegermos
                nossos direitos, proteger sua segurança ou a segurança de outros, investigar fraudes
                ou atender a um pedido do governo;
              </li>
              <li>
                Caso o Curcucalm se envolva numa fusão, aquisição, ou tenha seus direitos vendidos
                em termos ou ao todo, você será notificado por e-mail, ou por um aviso bem claro em
                nosso site, de qualquer mudança nesse sentido, ou no uso de suas informações
                pessoais, bem como de qualquer nova situação que envolva os seus dados pessoais
                divulgados a terceiros, a fim de que isso nunca seja efetuado sem consentimento.
              </li>
            </ul>

            <p className="mb-6">
              Cookies “Cookies” são pequenas informações que gravamos no navegador que você utiliza
              para navegar ou no hard drive. Nós e nossos parceiros usamos os cookies para nos
              lembrarmos de informações pessoais quando você visita nosso site.
            </p>

            <p className="mb-6">
              Por exemplo, caso opte por visualizar nosso site em francês, armazenaremos essa
              informação nos cookies para mostrarmos o site sempre em francês para você. Também
              usamos os cookies para gravar o seu número de identificação do usuário e endereço de
              e-mail quando você seleciona “Lembrar-me” ao fazer login.
            </p>

            <p className="mb-6">
              Esse número de identificação do usuário e endereço de e-mail é gravado em cookies nos
              computadores que utilizam, para que não seja preciso digitar suas informações de login
              cada vez que faça login em nosso site.
            </p>

            <p className="mb-6">
              Também usamos os cookies para desenvolver e mostrar conteúdo e anúncios específicos
              para seus interesses. Um cookie é uma coleção de informações, geralmente de pequeno
              tamanho e identificador único, que é gravada no disco rígido do computador de quem usa
              a internet.
            </p>

            <p className="mb-6">
              Esse arquivo é enviado pelo servidor do nosso site para o seu navegador e depois
              gravado no disco rígido do seu computador. Usamos os seguintes tipos de cookies nos
              computadores que são de nossa gestão. Armazenamos os cookies em seu computador por até
              2 (dois) anos.
            </p>

            <p className="mb-6">
              Cookies de Sessão: usados para registrar a identificação do usuário e dar acesso à sua
              área de usuário. São gravados em cookies nos computadores que utilizam apenas enquanto
              durar a sessão e não se armazenam permanentemente no disco rígido do computador. Os
              cookies de sessão podem ser desativados se você não utilizar o site.
            </p>

            <p className="mb-6">
              Cookies Persistentes: são gravados em cookies no disco rígido do computador dos
              usuários que utilizam o site, por um período de tempo determinado (dois anos). Eles
              não se encerram quando você fecha o navegador. Eles são usados para nos lembrar de
              quem você é quando retornar ao site para que possamos apresentar o conteúdo certo para
              você, de forma apropriada.
            </p>

            <p className="mb-6">
              Cookies Analíticos: usados para analisar os resultados de nosso site. Toda a
              informação é anônima, ou seja, não recolhemos informação pessoal. São gravados em
              cookies nos computadores que utilizam o site. Você pode eliminá-los, porém, não poderá
              realizar perguntas.
            </p>

            <p className="mb-6">
              Cookies de Rastreamento: usados para fornecer informações sobre quais páginas são
              visualizadas, com qual frequência e por quantos usuários. O serviço de estatísticas
              que utilizamos (Google Analytics) também pode usar cookies para saber se você já
              visitou o site antes, ou se é a primeira vez — e para ajudar a avaliar quantos
              usuários do site é que retornam.
            </p>

            <p className="mb-6">
              Você pode eliminar os cookies a qualquer momento ou pode configurar o seu navegador
              para não aceitar cookies. Fazendo isso, contudo, poderá afetar o seu uso do site.
            </p>

            <p className="mb-6">
              Assinatura e uso do site Para assinar nossos produtos, é preciso escolher o nome de
              usuário e senha. Você é responsável por manter a confidencialidade de sua senha.
            </p>

            <p className="mb-6">
              Se você acredita que sua senha foi comprometida ou a utilizaram sem a sua autorização,
              você precisa alterá-la imediatamente e nos avisar pelo e-mail
              contato@curcucalmoficial.com.
            </p>

            <p className="mb-6">
              Para ter acesso à sua área de usuário, você precisa se conectar utilizando seu nome de
              usuário e senha pessoal. É proibido usar a conta de outro usuário ou permitir que
              outros utilizem a sua conta pessoal.
            </p>

            <p className="mb-6">
              Você deve nos notificar imediatamente sobre qualquer uso não autorizado de sua conta,
              ou sobre qualquer quebra de segurança de que tenha conhecimento.
            </p>

            <p className="mb-6">
              Você é responsável por todas as atividades efetuadas com o uso do seu nome de usuário
              e senha pessoal.
            </p>

            <p className="mb-6">
              Se você participar de fóruns, salas de bate-papo, murais de mensagens ou outras áreas
              interativas em nosso site, seja responsável pelaquilo que posta.
            </p>

            <p className="mb-6">
              Você não pode enviar ou publicar qualquer informação ou material difamatório,
              ameaçador, obsceno, ofensivo, pornográfico, ilegal, que viole os direitos autorais ou
              que viole a privacidade de alguém.
            </p>

            <p className="mb-6">
              Você não pode usar um nome de usuário que remete a uma pessoa ou entidade que não você
              mesmo, com a intenção de enganar.
            </p>

            <p className="mb-6">
              Se você usar um apelido, reserve o direito de removê-lo ou recuperá-lo se entender que
              isso é necessário.
            </p>

            <p className="mb-6">
              Reclamações, Perguntas e Solicitações Qualquer reclamação, pergunta ou solicitação
              deverá ser dirigida a:
            </p>

            <p className="mb-6">
              E-mail: contato@curcucalmoficial.com Você concorda com o fato de que a equipe deste
              site poderá, eventualmente, lhe enviar mensagens de e-mail para o endereço que você
              informou no momento de seu cadastro.
            </p>

            <p className="mb-6">
              Você pode solicitar que suas informações pessoais sejam apagadas de nosso sistema.
              Basta nos enviar um e-mail solicitando a exclusão de suas informações de nosso banco
              de dados.
            </p>

            <p className="mb-6">
              Caso tenha alguma dúvida adicional ou necessite de esclarecimentos sobre este Termo de
              Uso, não hesite em entrar em contato conosco pelo e-mail fornecido acima.
            </p>

            <p className="mb-6">
              Agradecemos por visitar o nosso site e por sua compreensão destes termos de uso.
            </p>
          </div>

          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <ClearIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
