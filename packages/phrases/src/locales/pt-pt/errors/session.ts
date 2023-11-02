const session = {
  not_found: 'Sessão não encontrada. Por favor, volte e faça login novamente.',
  invalid_credentials: 'Credenciais inválidas. Por favor, verifique os dados.',
  invalid_sign_in_method: 'O método de login atual não está disponível.',
  invalid_connector_id:
    'Não foi possível encontrar um conector disponível com o id {{connectorId}}.',
  insufficient_info: 'Informações de login insuficientes.',
  connector_id_mismatch: 'O connectorId não corresponde ao registado na sessão.',
  connector_session_not_found:
    'Sessão do conector não encontrada. Por favor, volte e faça login novamente.',
  verification_session_not_found:
    'A verificação não foi bem-sucedida. Reinicie o processo de verificação e tente novamente.',
  verification_expired:
    'A conexão expirou. Verifique novamente para garantir a segurança de sua conta.',
  /** UNTRANSLATED */
  verification_blocked_too_many_attempts:
    'Too many attempts in a short time. Please try again {{relativeTime}}.',
  unauthorized: 'Faça login primeiro.',
  unsupported_prompt_name: 'Nome de prompt não suportado.',
  forgot_password_not_enabled: 'Recuperação de senha não está habilitada.',
  verification_failed:
    'A verificação não foi bem-sucedida. Reinicie o processo de verificação e tente novamente.',
  connector_validation_session_not_found:
    'A sessão do conector para validação do token não foi encontrada.',
  identifier_not_found:
    'Identificador do usuário não encontrado. Por favor, volte e faça login novamente.',
  interaction_not_found:
    'Sessão de interação não encontrada. Por favor, volte e inicie a sessão novamente.',
  /** UNTRANSLATED */
  not_supported_for_forgot_password: 'This operation is not supported for forgot password.',
  mfa: {
    /** UNTRANSLATED */
    require_mfa_verification: 'Mfa verification is required to sign in.',
    /** UNTRANSLATED */
    mfa_sign_in_only: 'Mfa is only available for sign-in interaction.',
    /** UNTRANSLATED */
    pending_info_not_found: 'Pending MFA info not found, please initiate MFA first.',
    /** UNTRANSLATED */
    invalid_totp_code: 'Invalid TOTP code.',
    /** UNTRANSLATED */
    webauthn_verification_failed: 'WebAuthn verification failed.',
    /** UNTRANSLATED */
    webauthn_verification_not_found: 'WebAuthn verification not found.',
    /** UNTRANSLATED */
    bind_mfa_existed: 'MFA already exists.',
    /** UNTRANSLATED */
    backup_code_can_not_be_alone: 'Backup code can not be the only MFA.',
    /** UNTRANSLATED */
    backup_code_required: 'Backup code is required.',
    /** UNTRANSLATED */
    invalid_backup_code: 'Invalid backup code.',
    /** UNTRANSLATED */
    mfa_policy_not_user_controlled: 'MFA policy is not user controlled.',
  },
};

export default Object.freeze(session);
